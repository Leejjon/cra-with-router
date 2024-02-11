import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";

function Home() {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t("TITLE_HOME")}</title>
                <meta name="description" content={t("DESCRIPTION_HOME")}/>
                <meta property="og:title" content={t("TITLE_HOME")}/>
                <meta property="og:description" content={t("DESCRIPTION_HOME")}/>
            </Helmet>
            <div>{t("DESCRIPTION_HOME")}</div>
        </>
    );
}

export default Home;
