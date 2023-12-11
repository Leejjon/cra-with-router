import {Helmet} from "react-helmet-async";

function About() {
    const title = "About";
    const description = "About us.";
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

export default About;
