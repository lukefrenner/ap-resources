import './index.scss'
import Score from '../../../assets/images/IMG_1123.jpg'

const APWorld = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP World History</h1>
            <div class="explanation">
                <p>AP World History is different than some other AP classes, largely due to the fact that you have so 
                    much information to memorize. Many other AP classes do require memorization, but not nearly as much as
                    AP World. Thus a big part of studying for AP World for me was watching review videos and completing
                    the class readings. If you are diligent with learning the content, then the actual test can feel 
                    a lot simpler than many other AP exams. 
                </p>
            </div>

            <h2 class="sub_title">Unit By Unit Review</h2>
            <div class="past_exams_text">
                <p>As mentioned above, unit by unit review is an essential component of this class. If you want to excel in this class
                    and on the AP Exam, you are going to have to make sure you are learning the content, not all at once, but spread out 
                    throughout the year. <br /> <br /> Thankfully, there are wonderful AP World resources on YouTube, specifically, from 
                    <a href="https://youtube.com/@heimlershistory?si=huMkN5KzLYcN80XZ" targer="_blank"> Heimler's History</a>. He has videos that explain nearly everything you need to know for the exam, as well as longer unit review videos. 
                    Make sure you watch ALL of his videos, as he was a big reason behind my success in the class. 
                </p>
                    <div class="vid_text">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HfIWZhXt7fY?si=XPDSPqL8AGKaKkQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p>When studying through Unit 1 for example, I would watch each individual lesson's (Ex. 1.1, 1.2 etc.) videos to understand the concept</p>
                    </div>
                    <div class="vid_text">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDkPq5KcbS4?si=e1ncZpYcFtNvdrzt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p>At the end of each unit, when preparing for a unit exam I would watch the unit review video to get reminded of all that was in the unit. I also rewatched these unit review videos before the AP Exam to make sure I remembered everything. It can be difficult to rememeber the content you learned in September, in May! </p>
                    </div>

                <p>While Heimler's history was the main video source I relied on, there were other helpful YouTube creators
                    who I utilized. Below is one that you could check out.
                </p>

                <ul>
                    <li><a href="https://youtube.com/@freeman_pedia?si=_TfwDEgVFWH-_s21" target="_blank">FREEMAN-PEDIA</a></li> <br />
                </ul>
            </div>
            

            <h2 class="sub_title" >Past AP World History Exams</h2>
            <div class="past_exams_text">
                <p>There are a bunch of past exams (2002 - Current Day). I would recommend that if studying for a specific topic, 
                    go through the exams looking for questions that line up with the topic you are looking for. If you're looking 
                    for general review, choose any of these exams and go through them question by question. Remember that the mark scheme
                    is there to help you check your answers. <br /> <br />
                    <ul>
                    <li><a href="https://apcentral.collegeboard.org/courses/ap-world-history/exam/past-exam-questions" target="_blank">Released Past AP Calculus BC FRQs </a></li> <br />
                    </ul>
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-world-history-set-1.pdf"/>
            </div>
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-world-history-score-calculator/" target="_blank">AP World History Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APWorld