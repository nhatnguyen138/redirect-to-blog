import { Helmet } from 'react-helmet'
import Logo from './logo192.png'

interface MetaTagsDef {
  section?: string,
  description: string,
  image: string
}

const SiteUrl = "blogofnhat.netlify.com"

export default function MetaTags(props:MetaTagsDef) {
  const { section, description, image } = props
  return (
    <Helmet>
      <title>{section}</title>
      <link rel="icon" href={Logo} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="refresh" content="5; URL=https://blogofnhat.netlify.app/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={section} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:url" content={SiteUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={section} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" itemProp="image" content={image} />
      <meta property="twitter:url" content={SiteUrl} />
    </Helmet>
  )
}