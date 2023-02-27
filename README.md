
![Logo](https://mir-s3-cdn-cf.behance.net/project_modules/1400/74731f76965389.5c7945b0cfcc3.gif)


# Ecommerce Portal

Description


## Installation

- Clone the project https://github.com/kyooowe/ecommerce-portal.git
- Open terminal

```bash
  npm i
```
    
## Documentation

#### Framework and Libraries

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/docs/intro)

#### Folder Structure
    
    - Pages (all pages of the portal)
    - Public (storage for static images)
    - Src
        - Components (usable components in project)
        - Content (layout content)
        - Context (layout context)
        - Hooks (all written custom hooks)
        - Inteface (global interface in project)
        - Layout (layout of projects)
        - Partial (all static data for interface)
        - Services (api connection)
        - Theme (theme of project)
        - Zustand (state management of project)

#### Adding Custom Pages

``` typescript
const NameOfYourPage = () => {
    return <h1>Hello World </h1>
}

export default NameOfYourPage

NameOfYourPage.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}
```

#### Adding public data in .env

    NEXT_PUBLIC_(NAME OF YOUR DATA)=(DATA ITSELF)


## Demo

Incoming


## Roadmap

- Profile
- Dashboard
- Products
- Messages
- Push Notification
- Real Time Data
- Mobile App



## Acknowledgements

 - [Tokyo Template](https://bloomui.com/product/tokyo-free-white-nextjs-typescript-material-ui-admin-dashboard/)
 - [Background and Vector Image](https://www.freepik.com/)


## Authors

- [@kyooowe](https://www.github.com/kyooowe)

