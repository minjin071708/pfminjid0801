import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="I’m Minji.D I live in Seoul City, where I design and code the future."
      intro="“Sigan con el buen trabajo.” (keep up the good work)"
    >
      <div className="space-y-20">
        <ToolsSection title="2024.12.11 ~ 재직중 ">
          <Tool title="새임 스타트업 IT회사">
          현대 건설의 스마트 안전교육 시스템 구축
          프로젝트의 디자인, 퍼블리싱 담당
          </Tool>
          
          
    
        </ToolsSection>
        <ToolsSection title="2023.01.02 ~ 2024.11.15 ">
          <Tool title="테크월드 메디어 회사">
          웹디자인, 프론트엔드, 웹페이지 관리
          이직사유 : 지금 업무가 다지인 위주라서 그거 보다 개발을 하고 싶어요
          </Tool>
          
          
    
        </ToolsSection>
        <ToolsSection title="2021.12 ~ 2022.03 ">
          <Tool title="타고플러스 (웹퍼블리싱)">
          퇴직사유 : 회사측 근로계약서 미작성
          </Tool>
        
          
        </ToolsSection>
        
       
      </div>
    </SimpleLayout>
  )
}
