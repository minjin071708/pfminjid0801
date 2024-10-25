import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
       
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="학사는 몽골에서 외국어 1등 University of the Humanities에서 영어영문학과 졸업하고 석사는 한국에서 숭실대학교 IT 경영 졸업했습니다"
      intro="전공을 바꾼 이유: 직업을 선택할 때, 새로운 것을 배우고 자기 발전을 멈추지 않는 성향이 적용되었습니다. 스스로
나아가는 것을 좋아하는 성격 때문에 계속 발전할 수 있는 직업을 찾던 중 앞으로 가장 전망이 좋고
자신을 발전해나갈 수 있는 IT 분야, 그 중 개발자를 선택하게 되었습니다. 스스로에 대한 발전과 함께
누군가가 필요한 것을 만드는 일을 한다는 것이 큰 매력을 느낌니다.
"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
