import './index.scss'
import Score from '../../../assets/images/IMG_1156.jpg'

const APChem = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP Chemistry</h1>
            <div class="explanation">
                <p>AP Chemistry requires lots of practice. Certain aspects of it can seem daunting and difficult at times, but 
                    with continual practice, much of it can begin to make sense. Just make sure to not give up when it seems difficult,
                    but rather stay focused and practice!
                </p>
            </div>

            <h2 class="sub_title">Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p>Khan Academy has actually very useful resources for this class. There are videos explaining most of the topics. Additionally, 
                    there are practice questions for each topic. The practice questions were actually quite helpful for me throughout
                    the year when practicing for the weekly quizzes and when trying to understand the content.
                    <ul>
                        <li><a href="https://www.khanacademy.org/science/ap-chemistry-beta" target="_blank"> Khan Academy </a></li>
                    </ul>
                </p>
            </div>

            <h2 class="sub_title" >Past AP Chemistry Exams</h2>
            <div class="past_exams_text">
                <p>There are a bunch of past exams (2014 - Current Day). I would recommend that if studying for a specific topic, 
                    go through the exams looking for questions that line up with the topic you are looking for. If you're looking 
                    for general review, choose any of these exams and go through them question by question. Remember that the mark scheme
                    is there to help you check your answers. <br /> <br />
                    <ul>
                    <li><a href="https://apcentral.collegeboard.org/courses/ap-chemistry/exam/past-exam-questions" target="_blank">Released Past AP Chemistry FRQs </a></li> <br />
                    <li><a href="https://youtube.com/playlist?list=PLp8P489qkBoY5uMjRtsvkwG8VhFmHZy_l&si=2Y87v4t5EBPLQizy" target="_blank">FRQ's Solved </a>(This channel doesn't have every past questions solved. It only goes back to 2021. However, it is still a helpful resource to utilize when going through the more recent exams)</li> <br />
                    </ul>

                    Below is an example of a way you could study. Solve the first question from the 2024 exam, then if you get stuck 
                    or just want to see the problem worked out, check out the video, where you can see the problem solved step 
                    by step. Studying with the actual FRQs was very helpful for me, as it made me very comfortable with the AP Chem question types
                    and helped me know how to answer specific types of questions. I learned when including certain details would ensure that I got
                    a point and when I needed to showcase a certain calculation, even if it seemed basic. Thus more than anything
                    I would recommend solving such questions.
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LzkhJgYzOgk?si=5hnO4Lrof_L2zv4W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-chemistry-score-calculator/" target="_blank">AP Chemistry Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APChem