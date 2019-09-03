> [셋업가이드](https://github.com/ChoDragon9/posts/wiki/프레임워크n라이브러리#nuxt)

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### 폴더 구조
> https://nuxtjs.org/guide/directory-structure 기반으로 세팅되었다.

```
├─ assets
├─ components
├─ constants
├─ directives
├─ filters
├─ layouts
├─ middleware
├─ pages
├─ plugins
├─ server
├─ static
├─ store
├─ test
└─ types
```
#### assets
Stylus, Sass 파일들, 이미지, 폰트 처럼 컴파일되지 않은 에셋들을 포함하는 디렉토리이다.

assets에 있는 이미지 파일은 `v-bind`를 사용하면 동작하지 않는 다. `v-bind`를 사용하려면 `static`을 사용해야 한다.

`src='path/to/image'` 형태로 작성되면 `build`시 이미지 파일명에 해쉬코드가 추가되며, `.nuxt/dist/client/img`에 추가된다.

#### components
VueJs 컴포넌트를 포함하는 디렉토리이다. 이 컴포넌트들에게는 `asyncData` 또는 `fetch`를 사용해선 안된다.

#### [Custom] directives
VueJs 디렉티브를 포함하는 디렉토리이다. Nuxt 구조에 커스텀으로 추가한 디렉토리이다. `nuxt.config.ts`의 `plugins`에 해당 파일을 추가해줘야 한다.

#### [Custom] filters
VueJs 필터를 포함하는 디렉토리이다. Nuxt 구조에 커스텀으로 추가한 디렉토리이다. `nuxt.config.ts`의 `plugins`에 해당 파일을 추가해줘야 한다.

#### layouts
애플리케이션의 레이아웃을 포함하는 디렉토리이다. 페이지의 Look and Feel를 변경하기 위해 사용된다.

레이아웃을 사용하는 것은 `page`에서 결정하며 레이아웃 코드중 `<nuxt />`에 `page` 컴포넌트가 작성된다.

#### middleware
애플리케이션의 미들웨어를 포함하는 디렉토리이다. 미들웨어는 **페이지나 레이아웃이 렌더링 되기 전**에 실행할 사용자 정의 함수를 정의할 수 있다.

페이지나 레이아웃 접근전이나 모든 라우팅 변경 시 **인증** 처리를 할 수 있다.

```
// middleware/logger.ts
export default () => {
  console.log('Logger')
}
```

```
// nuxt.config.ts
const config: NuxtConfiguration = {
  ...
  router: {
    middleware: 'logger'
  }
}
```

```
// pages/index.vue
@Component({
  ...
  middleware: 'logger'
})
```

#### pages
애플리케이션의 뷰와 라우트를 포함하는 디렉토리이다. NuxtJs는 모든 `.vue`파일을 읽고 애플리케이션의 라우터를 생성한다.

#### [Custom] plugins
> Nuxt의 plugins 정책을 따르지 않는다. 등록된 plugin을 TypeScript에서 추적을 못 하기 때문에 커스텀한 룰을 따른다. 

**루트 VueJs 애플리케이션이 생성되기 전**에 실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리이다.
외부에 사이드이펙트를 발생하지 않는 순수함수로 작성되어야 한다.

##### plugins/current-time.ts
```
export const getCurrentTime = () => Date.now()
```

##### pages/index.vue
```
import { getCurrentTime } from '~/plugins/current-time'

@Component({})
class Page extends Vue {
  constructor() {
    super()
    console.log('page getTime', getCurrentTime())
  }
}
```

#### server
Nuxt의 Express 서버를 포함하는 디렉토리이다.

#### static
정적 파일들을 포함하는 디렉토리이다. `/filename.png` 형태로 사용하면 `/static/filename.png`로 연결된다.

#### store
Vuex Store 파일을 포함하는 디렉토리이다. Vuex Store 옵션은 NuxtJs 프레임워크에 의해 실행되며, `index.js` 파일을 생성하면 프레임워크가 자동으로 옵션을 활성화한다.

#### test
테스트 파일을 포함하는 디렉토리이다.

#### [Custom] types
TypeScript의 타입 정의파일을 포함하는 디렉토리이다. Nuxt 구조에 커스텀으로 추가한 디렉토리이다.
