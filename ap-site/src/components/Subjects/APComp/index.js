import './index.scss'
import Score from '../../../assets/images/IMG_1174.jpg'

const APComp = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP Computer Science A</h1>
            <div class="explanation">
                <p>AP Computer Science is an interesting class that can seem simple to some and difficult to others. 
                    The amount of review you need to do for this exam will depend on your level of comfort with Java and 
                    all that goes into writing Java programs. I have yet to take the exam, as I am currently in the process
                    of studying the class. However, a large factor in my learning journey has been just writing programs in Java
                    and becoming more comfortable with the language. 
                </p>
            </div>

            <h2 class="sub_title" >Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p>
                    AP Computer Science actually has a wonderful and free resource online that goes through nearly everything
                    you need to know for the exam in detail and provides lots of practice. It's called <a href="https://runestone.academy/ns/books/published/csawesome/index.html" target="_blank"> AP CSAwesome  </a>. It is absolutely incredible that such a resource is avaiable for free.
                    I would most definitely utilize this resource when stuck on a specific unit or at the end of the year when reviewing everything.
                    <div class="cs_course">
                        <iframe src="https://runestone.academy/ns/books/published/csawesome/index.html" width="800" height="500" title="CSAwesome Website"/>
                    </div>
                </p>
            </div>

            <h2 class="sub_title" >Past AP Calculus Exams</h2>
            <div class="past_exams_text">
                <p>There are a bunch of past exams (1999 - Current Day). I would recommend that if studying for a specific topic, 
                    go through the exams looking for questions that line up with the topic you are looking for. If you're looking 
                    for general review, choose any of these exams and go through them question by question. Remember that the mark scheme
                    is there to help you check your answers. <br /> <br />
                    <ul>
                    <li><a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam/past-exam-questions" target="_blank">Released Past AP Computer Science A FRQs </a></li> <br />
                    </ul>

                    Below is the 2024 FRQ. Most of the exams are set up in a similar way, with the same number of questions that 
                    usually follow a set pattern. 
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-comp-sci-a.pdf"/>
            </div>
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-computer-science-a-score-calculator/" target="_blank">AP Computer Science A Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APComp