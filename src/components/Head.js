import React from "react";
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <>
            <Helmet
                defaultTitle="可可托海没有海"
                title={title}
                titleTemplate="%s | 可可托海没有海"
                htmlAttributes={{
                    lang: 'zh',
                }}
            >
                <meta charSet="utf-8" />
                <meta name="description" content="设计师、开发者李大毛的个人网站"/>
            </Helmet>
        </>
    )
}

export default Head