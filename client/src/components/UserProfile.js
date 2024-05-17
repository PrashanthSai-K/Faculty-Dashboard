import React from 'react'

export default function UserProfile() {
    return (
        <>
            <div style={{fontFamily:"Verdana"}} className="h-full  gap-10 flex justify-center rounded-xl w-full p-10">
                <div className=" w-1/5 h-fit flex justify-center items-start bg-white py-10 rounded-xl">
                    <div className="flex flex-col justify-center gap-4 items-center ">
                        <div className=" rounded-full border-8 p-2 w-2/4 h-2/4">
                            <img className="rounded-full" src={"./images/user.png"} ></img>
                        </div>

                        {/* <div className="flex flex-col gap-5 justify-center items-center"> */}
                        <div className=" font-bold text-2xl">Sai Prashanth K</div>
                        <div className=" text-md">Computer science and engineering</div>
                        <div className=" text-md">Assistant Proffesor</div>
                        <div className=" text-md">Level II</div>
                        <div className=" text-md">Saiprashanth.cs21@bitsathy.ac.in</div>
                        {/* </div> */}
                    </div>

                </div>
                <div className="w-3/4 h-5/6 flex flex-col gap-5  rounded-xl pl-2 " >
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                            About
                        </div>
                        <div style={{fontFamily: "Open Sans"}} className="text-md w-3/4">
                            Dr. Nirupma Gupta (MBBS, MS), Dean, SMS&R, An alumni of Lady Hardinge Medical College New Delhi was Professor & Head, Anatomy, Since 2015.  A wonderful mentor with a teaching experience of more than 19 years in undergraduate and postgraduate programme. Besides, she has been actively engaged in Research activities for the past two decades. She has many research publications in National & International Journals. She has supervised postgraduate students for thesis work and projects. Dr. Nirupma has chaired many sessions  at national conferences.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                        Experience
                        </div>
                        <ul className="list-disc pl-5">
                            <li>20 years +</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                        Qualification
                        </div>
                        <ul className="list-disc pl-5">
                            <li>B.E</li>
                            <li>M.E</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                        Award & Recognition
                        </div>
                        <ul className="list-disc pl-5">
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                        Certifications
                        </div>
                        <ul className="list-disc pl-5">
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start">
                        <div className=" font-semibold text-2xl">
                        Certifications
                        </div>
                        <ul className="list-disc pl-5">
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                            <li>Worked as Head & Prof. Anatomy, Since 2015, SMS&R, SU</li>
                            <li>As Dean Student Welfare, Since August 2016, SU</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
