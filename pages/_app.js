import '@/styles/globals.scss'
import Header from '@/components/header/header'
import {Provider} from "react-redux";
import store from "@/store/store";
import Wrapper from "@/pages/wrapper";
import Footer from "@/components/footer/footer";
export default function App({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <Wrapper>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </Wrapper>
            </Provider>
        </>
    )
}
