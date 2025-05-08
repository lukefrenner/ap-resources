import './index.scss'
import APLang from '../Subjects/APLang'
import APLit from '..//Subjects/APLit'
import APPhysics1 from '../Subjects/APPhysics1'
import APChem from '..//Subjects/APChem'
import APCalc from '..//Subjects/APCalc'
import APComp from '../Subjects/APComp'
import APWorld from '../Subjects/APWorld'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div class="home_page">
            <div class="side_1">
                
                <p>I hope this website can be of support to those of you who are taking AP Classes and/or the exams. 
                    You might find the resources I share helpful, or you might not. We all have different ways of studying
                    and this website includes a collection of resources that I found to be useful for me. If you have 
                    any questions feel free to utilize the contact form! <br/><br/><br/>

                    Most of the practice questions I have posted on this site are FRQs rather than MCQs. This is mostly due to
                    the fact that Collegeboard openly releases FRQs, while not as much with MCQs. In order to get MCQ practice
                    it's easiest to ask your teachers to open up practice questions on AP Classroom.
                </p>
            </div>
            <div class="side_2">
                <h2>AP Subjects Included</h2>
                <ul>
                <Link to="/APLit"><li>AP Literature and Composition</li></Link>
                <Link to="/APLang"><li>AP English Language and Composition</li></Link>
                <Link to="/APPhysics1"><li>AP Physics 1</li></Link>
                <Link to="/APChem"><li>AP Chemistry</li></Link>
                <Link to="/APCalc"><li>AP Calculus BC</li></Link>
                <Link to="/APComp"><li>AP Computer Science A</li></Link>
                <Link to="/APWorld"><li>AP World History</li></Link>
                </ul>
            </div>
        </div>
    )
}


export default Home

