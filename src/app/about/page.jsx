import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Minji.D I live in Seoul City, where I design and code the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’m Minji.D I live in Seoul City, where I design and code the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            <b>한국으로 유학 온 이유 :</b>
대학교 졸업 후 몽골 신공항 건설 프로젝트에 참여했던 때입니다. 제가 맡은 업무는 영어, 한국어, 몽골어 통역 및 번역 업무였으며 이때
처음으로 한국 사람들과 같이 일하며 한국 사람들의 성실함, 좋은 능력, 친절함 등 배울 점을 많이 보았고
‘한국에서 다양한 것을 겪어보자’ 라는 마음으로 유학오게 되었습니다. 이제는 한국에서 산지 8년이 되어갑니다. 한국 사람들 하고 일을 하는데 문제 전혀 없습니다.

            </p>
            <p>
              <b>개발자가 된 이유 :</b>
저는 직업을 선택할 때, 새로운 것을 배우고 자기 발전을 멈추지 않는 성격이 있습니다. 스스로
나아가는 것을 좋아하는 성격 때문에 계속 발전할 수 있는 직업을 찾던 중 앞으로 가장 전망이 좋고
자신을 발전해나갈 수 있는 IT 분야, 그 중 개발자를 선택하게 되었습니다. 스스로에 대한 발전과 함께
누군가가 필요한 것을 만드는 일을 한다는 것이 큰 매력으로 다가왔습니다.
한국에서 숭실대학교 IT 경영학 석사 수업을 들으며 주로 PM 관련 내용을 배웠습니다. 전반적으로
컴퓨터시스템, 빅데이터, 빅데이터전략론, ICT 기술정책전략, 웹시스템, 데이터베이스에 관한 과목을
배웠으며 코딩 관련하여서는 HTML, CSS, Java, Linux, MySQL 에 대해 배웠습니다. 
기술을 익히기 위해 2022년도에 방송정보국제교육원 프론트엔드 개발자 과정을 수료하였습니다. 
 현재는 테크월드 미디어업체에서 디자인 및 UI/UX 개발을 담당하고 있습니다.
            </p>
            <p>
            <b>향후 계획 및 각오</b>
개발자로서의 실력을 쌓는 것이며 React,js vue.js next.js 등 사용해서 다양한 프로젝트 만드는 것 입니다. 
현재 다니고 있는 회사에서 틈틈히 animation design After effect, React js 를 꾸준히 공부하였습니다.
이제 공부한 것을 활용하여 다양한 포로젝트 참여하는 것이 앞으로의 계획입니다.
            </p>
            <p>
            <b>나의 장점</b> 
도전 정신과 그것을 이루기 위한 의지가 뛰어납니다.
처음으로 하는 타지 생활은 쉽지 않았습니다. 하지만 한국으로의 유학 결정, 본인 결정에 대한 책임으로
아르바이트를 하며 학비, 생활비를 벌었습니다. 외국인이 겪을 수 있는 좋은 점, 힘든 점 등 다양한 문제를
겪으며 마침내 취업에 성공하여 회사 생활을 잘 하고 있습니다. 이러한 모습을 돌이켜보면, 어려운 문제라
할지라도 도전하며 원하는것을 달성하기 위해 끝까지 진행할 수 있는 사람임을 깨닫게 되었습니다.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/LPark77543" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/minjin0717/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/Beaka0717" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/minji-d-6035701a2/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="minjee9009@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              minjee9009@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
