import {Helmet} from "react-helmet-async";

function News() {
    const title = "News";
    const description = "The latest news.";
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
            </Helmet>
            <div>The latest news.</div>
        </>
    );
}

export default News;
