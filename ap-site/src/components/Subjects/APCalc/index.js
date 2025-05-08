import './index.scss'
import Score from '../../../assets/images/IMG_1116.jpg'

const APCalc = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP Calculus BC</h1>
            <div class="explanation">
                <p>I personally did many different things when studying for AP Calculus BC.
                    Sometimes a topic would be easier than others and I wouldn't need to do as 
                    much practice work. However, many times before quizzes I would start out by 
                    going through the AP Classroom unit review practice questions opened up by my teacher. I would also 
                    use the released AP Exams from the Collegeboard site as those are great examples of questions
                    that you might run into. Other times I would find videos solving AP Calculus Past Exams and try to solve
                    the questions they were solving. 
                </p>
            </div>

            <h2 class="sub_title" >Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p>For this class there aren't really any specific videos that I used to understand the content. Much of what 
                    you need to learn is explained in class, thus if you need any 
                    additional review, I would recommend chcking out the 
                    <a href="https://www.khanacademy.org/math/ap-calculus-bc" target="_blank"> Khan Academy </a> unit by unit videos, as they can 
                    be quite helpful in understanding concepts you might not otherwise understand. 
                </p>
            </div>

            <h2 class="sub_title" >Past AP Calculus Exams</h2>
            <div class="past_exams_text">
                <p>There are a bunch of past exams (1998 - Current Day). I would recommend that if studying for a specific topic, 
                    go through the exams looking for questions that line up with the topic you are looking for. If you're looking 
                    for general review, choose any of these exams and go through them question by question. Remember that the mark scheme
                    is there to help you check your answers. <br /> <br />

                    The YouTube Channel <a href="https://youtube.com/@turksvids?si=FmA3m3tEJrSe7PJy" target='_blank'>turksvids</a> was an extremely helpful to me. Not only 
                    does he solve past papers, but he also has videos going through MCQ questions and reviewing specific topics. I would definitely utilize his videos!
                    
                    <br/><br/>
                    
                    <ul>
                    <li><a href="https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions" target="_blank">Released Past AP Calculus BC FRQs </a></li> <br />
                    <li><a href="https://youtube.com/@turksvids?si=KXPUfgJ5nqYo_xD_" target="_blank">AP Calculus Released Exams Solved on YouTube </a></li> <br />
                    </ul>

                    Below is an example of a way you could study. Solve the first question from the 2024 exam, then if you get stuck 
                    or just want to see the problem worked out, check out the video, where you can see the problem solved step 
                    by step. 
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-bc.pdf"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TZPzmkjiFCg?si=J6Pk48_ql4gfIXYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-calculus-bc-score-calculator/" target="_blank">AP Calculus BC Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APCalc