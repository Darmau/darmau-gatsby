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
            />
        </>
    )
}

export default Head