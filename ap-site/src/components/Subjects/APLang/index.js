import './index.scss'
import Score from '../../../assets/images/IMG_1154.jpg'

const APLang = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP English Language and Composition</h1>
            <div class="explanation">
                <p>AP Language might initially feel similar to AP Literature. However, the two classes are actually quite different in various
                    ways. AP Lang isn't as focused on literature, rather it is focused on specific choices writers make when writing their pieces of 
                    work. Additionally, rather than writing essays on a specific literary work, topics will be more general, based on 
                    historical, political, enviromental and many different interesting topics. For me personally, this was more enjoyable than 
                    writing essays on literary works, as I enjoy writing about real-world topics.
                </p>
            </div>

            <h2 class="sub_title">Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p> This class doesn't really have specific, set units that need review. Throughout the year you will learn useful
                    information, but to prepare for the AP exam, there isn't much specific review material that I found neccesary 
                    to go through. 
                </p>
            </div>

            <h2 class="sub_title">AP Lang Exam Prep</h2>
            <div class="past_exams_text lit_text">
                <p>AP Lit has very defined question types that are on the exam that you will need to become extremely familiar with. They are:
                    <ol>
                    <li class="lit_heading">Synthesis Essay</li>
                        <ul>
                            <li> This essay type requires practice. This essay type requires you to first read through 6 sources
                                and then form an argument using information from the sources. Some of the sources can be lengthy and thus 
                                managing time is very important, as you have to read the sources and write the essay all within 
                                an hour. Thus by practicing you can decide how best to divide your time between reading and writing. 
                            </li>
                        </ul>
                    <li class="lit_heading">Rhetorical Anlaysis Essay</li>
                        <ul>
                            <li>Initially this essay typed seemed scary and difficult. Once I actually began writing one, I 
                                realized that this was actually my favorite essay type out of the 3. I enjoy reading the given passage
                                then taking note of specific rhetorical choices in the essay. It is important than you don't just list
                                out the choices in the essay, but rather incorporate them into the argument the author is making, allowing your essay to actually
                                have a purpose.
                            </li>
                        </ul>
                    <li class="lit_heading">Argument Essay</li>
                        <ul>
                            <li>This essay type is sometimes easy and sometimes difficult for me. It seems to really depend on the prompt. 
                                This essay requires you to bring in your own evidence, that you already know. This could be historical facts, pop-culture references, 
                                or really anything relevant to your argument. Thus when the prompt is about a topic
                                that I don't know very much, this can be difficult. However, when it is about something I do know lots about, 
                                this essay is actually not too difficult.
                            </li>
                        </ul>
                    </ol>

                    Each of these essay types requires lots of practice in order for you to become comfortable with them. You will 
                    have to write all 3 of these essay back to back, without a break on the exam, which isn't easy. Thus feeling 
                    familiar with the task beforehand will make your job on exam day feel much simpler. I would recommend 
                    sitting down with a timer and writing essays based on <a href="https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/exam/past-exam-questions" target="_blank">released exams</a> in order to improve your skills before
                    the actual exam.
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-1.pdf"/>
            </div>


            
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-english-language-score-calculator/" target="_blank">AP English Language and Composition Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APLang