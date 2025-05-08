import './index.scss'
import Score from '../../../assets/images/IMG_1145.jpg'

const APPhysics1 = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP Physics 1</h1>
            <div class="explanation">
                <p>AP Physics 1 was a difficult class for me. For me, actually learning the concepts wasn't overly difficult, 
                    it was solving questions. There are many different types if physics questions, that many times involve
                    combining multiple topics. Thus in my opinion the best way to prepare for the exam is by solving 
                    practice questions, allowing you not only to review, but also be exposed to a wide range
                    of possible question types. 

                </p>
            </div>

            <h2 class="sub_title" >Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p>For this class there aren't really any specific videos that I used to understand the content. Much of what 
                    you need to learn is explained in class, thus if you need any 
                    additional review, I would recommend chcking out the 
                    <a href="https://www.khanacademy.org/science/ap-college-physics-1" target="_blank"> Khan Academy </a> unit by unit videos, as they can 
                    be quite helpful in understanding concepts you might not otherwise understand. <br /> 
                </p>
            </div>

            <h2 class="sub_title" >Past AP Physics 1 Exams</h2>
            <div class="past_exams_text">
                <p>There are a bunch of past exams (2015 - Current Day). I would recommend that if studying for a specific topic, 
                    go through the exams looking for questions that line up with the topic you are looking for. If you're looking 
                    for general review, choose any of these exams and go through them question by question. Remember that the mark scheme
                    is there to help you check your answers. The YouTube channel linked below is a wonderful resource that was of great use to me in my
                    studying of past papers. The guy in the video solves many of the past papers and can really help you understand 
                    how to solve the questions, not just the answer. This is helpful because many times the mark scheme just tells you the answer
                    but doesn't explain how to arrive at that answer.<br /> <br />
                    <ul>
                    <li><a href="https://apcentral.collegeboard.org/courses/ap-physics-1/exam/past-exam-questions" target="_blank">Released Past AP Physics 1 FRQs </a></li> <br />
                    <li><a href="https://youtube.com/@allentsaostemcoach?si=6fH6AXEnwUr-dT_F" target="_blank">AP Physics 1 Released Exams Solved on YouTube </a></li> <br />
                    </ul>

                    Below is an example of a way you could study. Solve the first question from the 2024 exam, then if you get stuck 
                    or just want to see the problem worked out, check out the video, where you can see the problem solved step 
                    by step.
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-1.pdf"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/U40IdYdTeko?si=Bcgx2PS8hkaZp_kR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-physics-1-score-calculator/" target="_blank">AP Physics 1 Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APPhysics1