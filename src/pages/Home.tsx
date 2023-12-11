import {Helmet} from "react-helmet-async";

function Home() {
    const title = "Home";
    const description = "Home sweet home.";
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
            </Helmet>
            <div>{description}</div>
        </>
    );
}

export default Home;
