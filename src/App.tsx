import MetaTags from './components/MetaTags'
import './_styles.scss'

export default function App() {
  return (
    <div className="AppContainer">
      <MetaTags
        section="Redirecting..."
        description="Redirecting to Blog of Nhat. Please wait."
        image="https://i.imgur.com/WYrbInu.jpeg"
      />
      <div>
        <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Redirecting to my updated ePortfolio: Blog of Nhat . . .</p>
        <p>If you are not redirected in five seconds, <a href="https://blogofnhat.netlify.app/">click here</a>.</p>
      </div>
    </div>
  )
}