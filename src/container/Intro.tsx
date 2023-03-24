import React from "react";
import Footer from "../component/Footer";
import Button from "../component/Button";

export default function Intro() {
    return (
        <>
            <section className="section section-strava-api container">
                <h1>{INTRO_TITLE}</h1>

                {/*TODO: html render*/}
                {INTRO_DESCRIPTIONS.map(text => (
                    <p
                        key={text}
                        dangerouslySetInnerHTML={{__html: text}}
                    />
                ))}

                <div className="row cta-row">
                    {INTRO_LINKS.map((link, i) => (
                        <div
                            key={i}
                            className="col"
                        >
                            <Button {...link}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section section-strava-apps container text-center">
                <div className="hero">
                    <div className="jumbotron">
                        <h2>{BANNER_TITLE}</h2>
                        <p>{BANNER_DESCRIPTION}</p>
                        <Button {...BANNER_LINK}/>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

const INTRO_TITLE = '스트라바 API';
const INTRO_DESCRIPTIONS = [
    '스트라바의 운동 선수들은 매일 수백만 개의 활동을 업로드합니다. 우리의 개방형 API와 풍부한 데이터는 새로운 하드웨어를 만들거나 스트라바 경험을 보완하는 등 다양한 개발 기회를 제공합니다.',
    '스트라바 V3 API는 개방형 API로 개발자가 스트라바 데이터에 액세스할 수 있습니다. 이 인터페이스는 안정적이며 스트라바 모바일 앱에서 사용됩니다.',
    `그러나 때로는 성능 개선과 기능 추가를 위해 중대한 변경 사항이 발생하기도 합니다. (<a href="https://developers.strava.com/docs/changelog/">자세한 내용은 변경 로그를 참조하세요</a>)`,
    `만약 가상 경기, 대회나 스트라바 사이트나 서비스를 복제하는 경우를 포함하여  <a href="https://www.strava.com/legal/api">API 약관</a>을 위반하면 스트라바는 API 토큰을 취소할 권리를 보유합니다.`
];
const INTRO_LINKS = [
    {
        isLink: true,
        href: 'https://developers.strava.com/docs/getting-started',
        isRoute: false,
        theme: 'primary',
        style: 'block',
        text: '시작 가이드'
    },
    {
        isLink: true,
        href: '/docs/reference',
        isRoute: true,
        theme: 'secondary',
        style: 'block',
        text: 'API 문서'
    },
    {
        isLink: true,
        href: 'https://strava.com/settings/api',
        isRoute: false,
        theme: 'secondary',
        style: 'block',
        text: '앱 생성 & 관리'
    },
    {
        isLink: true,
        href: 'https://developers.strava.com/playground',
        isRoute: false,
        theme: 'secondary',
        style: 'block',
        text: 'Swagger'
    },
    {
        isLink: true,
        href: 'https://developers.strava.com/docs/#client-code',
        isRoute: false,
        theme: 'secondary',
        style: 'block',
        text: '라이브러리'
    },
]

const BANNER_TITLE = '스트라바 앱';
const BANNER_DESCRIPTION = [
    '전 세계의 수많은 개발자들이 스트라바 데이터를 활용하여 자신의 앱을 개발하고 있습니다.',
    '이제는 더 많은 운동 선수들이 앱을 통해 스트라바 더욱 즐기고 있습니다.',
    '성능 데이터 분석에 깊이 들어갈 수 있는 앱에서부터 이웃과 함께 달릴 수 있는 앱까지, 모든 운동 선수들을 위한 앱이 있습니다.'
];
const BANNER_LINK = {
    isLink: true,
    href: 'https://www.strava.com/apps',
    isRoute: false,
    theme: 'secondary',
    text: '앱 디렉토리'
};
