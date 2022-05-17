import React, {  }  from 'react';
import Layout from "../layout";
import Page404Content from "../components/Page404Content";

const NotFound404 = ({layout}) => {

    return(
        layout === 'false' 
            ? <Page404Content /> 
            : <Layout><Page404Content /></Layout>
    )

}


export default NotFound404;