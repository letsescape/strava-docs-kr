import React from "react";
import FooterContent from "./FooterContent";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="container">
                <div className="row">
                    <FooterContent
                        title={FOOTER_TITLE_1}
                        description={FOOTER_DESCRIPTION_1}
                        links={FOOTER_LIST_LINKS_1}
                    />
                    <FooterContent
                        title={FOOTER_TITLE_2}
                        description={FOOTER_DESCRIPTION_2}
                        links={FOOTER_LIST_LINKS_2}
                    />
                    <FooterContent
                        title={FOOTER_TITLE_3}
                        description={FOOTER_DESCRIPTION_3}
                        links={FOOTER_LIST_LINKS_3}
                    />
                </div>
            </div>
        </footer>
    );
}

const FOOTER_TITLE_1 = '약관 & 가이드라인';
const FOOTER_DESCRIPTION_1 = `스트라바 API를 사용하려면 스트라바 API 약관과 가이드라인을 준수해야 합니다. 로고, 링크 및 인가 규칙은 가이드라인에서 찾을 수도 있습니다.`;
const FOOTER_LIST_LINKS_1 = [
    {
        href: 'https://www.strava.com/legal/api',
        text: 'API 약관',
        isRoute: false
    },
    {
        href: 'https://developers.strava.com/guidelines',
        text: '가이드라인',
        isRoute: false
    }
];

const FOOTER_TITLE_2 = '스트라바 엔지니어링';
const FOOTER_DESCRIPTION_2 = `스트라바 엔지니어링 팀과 우리가 작업하고 있는 것들에 대해 알아보세요.`;
const FOOTER_LIST_LINKS_2 = [
    {
        href: 'https://medium.com/strava-engineering',
        text: '기술 블로그',
        isRoute: false
    },
    {
        href: 'https://boards.greenhouse.io/strava',
        text: '채용',
        isRoute: false
    }
];

const FOOTER_TITLE_3 = '개발자 커뮤니티';
const FOOTER_DESCRIPTION_3 = `다른 개발자들의 소식을 듣기 위해 스트라바 개발자 커뮤니티에 가입하세요. 기억하세요, 토큰이나 키를 공개 포럼에서 공유하지 마세요.`;
const FOOTER_LIST_LINKS_3 = [
    {
        href: 'https://communityhub.strava.com/t5/developers/ct-p/developers',
        text: '개발자 커뮤니티 가입',
        isRoute: false
    }
];
