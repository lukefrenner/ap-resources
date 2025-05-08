import './index.scss'
import Score from '../../../assets/images/IMG_1146.jpg'

const APLit = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP English Literature and Composition</h1>
            <div class="explanation">
                <p>AP Literature might come easier to some than others. Those who enjoy reading and who easily understand literature 
                    might find this class not too challenging. For others who might struggle to understand figurative language, this
                    class might seem more difficult. However, with practice and perseverance I do believe that everyone can suceed in this class. 
                    It just takes not giving up and continual practice.
                </p>
            </div>

            <h2 class="sub_title">Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p> This class doesn't really have specific, set units that need review. Throughout the year you will learn useful
                    information, but to prepare for the AP exam, there isn't much specific review material that I found neccesary 
                    to go through. 
                </p>
            </div>

            <h2 class="sub_title">AP Lit Exam Prep</h2>
            <div class="past_exams_text lit_text">
                <p>AP Lit has very defined question types that are on the exam that you will need to become extremely familiar with. They are:
                    <ol>
                    <li class="lit_heading">Poetry Analysis Essay</li>
                        <ul>
                            <li>This was the hardest essay type for me personally. Understanding poetry does not come naturally to me. 
                                If you are in a similar spot, all I can recommend is lots of practice as with time you will become
                                more comfortable in understanding the gist of the poem and be able to pick out details to use in your 
                                essay.
                            </li>
                        </ul>
                    <li class="lit_heading">Prose Analysis Essay</li>
                        <ul>
                            <li>Prose essays aren't too difficult for most people, including me as understanding prose feels easier to many than poetry. When writing this essay make sure 
                                to not only skim the given passage, but try to really understand it and pick out on unique details. 
                                When doing so writing an essay become simpler and you will be able to go deeper in your analysis.</li>
                        </ul>
                    <li class="lit_heading">Literary Argument Essay</li>
                        <ul>
                            <li>For me personally, I found that it was helpful to really know 2-3 novels/plays well for this essay type. 
                                I was able to pretty much respond to any prompt using the 2-3 novels/plays I knew, and by understanding
                                them very well, I was able to go deeper in my essays and get closer to writing a sophisticated essay. The novels/plays
                                that I knew very well were: 
                                <ul>
                                    <li>Frankenstein</li>
                                    <li>A Doll's House</li>
                                    <li>Hamlet</li>
                                </ul>
                            </li>
                        </ul>
                    </ol>

                    Each of these essay types requires lots of practice in order for you to become comfortable with them. You will 
                    have to write all 3 of these essay back to back, without a break on the exam, which isn't easy. Thus feeling 
                    familiar with the task beforehand will make your job on exam day feel much simpler. I would recommend 
                    sitting down with a timer and writing essays based on <a href="https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition/exam/past-exam-questions" target="_blank">released exams</a> in order to improve your skills before
                    the actual exam.
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-lit-set-1.pdf"/>
            </div>


            
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-english-literature-score-calculator/" target="_blank">AP English Literature and Composition Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APLit