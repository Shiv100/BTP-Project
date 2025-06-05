/*import React from 'react';

function ResumePreview({ data }) {
    return (
        <div className="border p-4 bg-gray-50">
            <h2 className="font-bold text-xl">{data.name}</h2>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Education: {data.education}</p>
            <p>Experience: {data.experience.map(exp => exp.jobTitle).join(", ")}</p>
            <p>Projects: {data.projects.map(proj => proj.projectTitle).join(", ")}</p>
            <p>Skills: {data.skills}</p>
            <p>Achievements: {data.achievements}</p>
            <p>Hobbies: {data.hobbies}</p>
        </div>
    );
}

export default ResumePreview;*/
/*import React from 'react';

function ResumePreview({ data }) {
    return (
        <div
            id="resumePreview"
            className="bg-white shadow-md mx-auto p-12"
            style={{ width: '210mm', minHeight: '297mm', padding: '20mm', fontSize: '12pt', lineHeight: '1.6' }}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <div className="text-right">
                    <p className="text-lg">{data.phone}</p>
                    <p className="text-lg">{data.email}</p>
                </div>
            </div>

            {data.profilePhoto && (
                <div className="text-center mb-6">
                    <img src={data.profilePhoto} alt="Profile" className="w-32 h-32 mx-auto rounded-full" />
                </div>
            )}

            <Section title="Education">
                <ul>
                    {data.education?.map((edu, index) => (
                        <li key={index} className="mb-2">
                            <p className="font-semibold">{edu.degree} - {edu.institute}</p>
                            <p>{edu.year} | {edu.percentage}</p>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Experience">
                {data.experience?.map((exp, index) => (
                    <div key={index} className="mb-2">
                        <p className="font-semibold">{exp.jobTitle} at {exp.company}</p>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </Section>

            <Section title="Projects">
                {data.projects?.map((proj, index) => (
                    <div key={index} className="mb-2">
                        <p className="font-semibold">{proj.projectTitle}</p>
                        <p>{proj.description}</p>
                        <a href={proj.link} className="text-blue-500">{proj.link}</a>
                    </div>
                ))}
            </Section>

            <Section title="Technical Skills">
                <p>{data.technicalSkills?.join(', ')}</p>
            </Section>

            <Section title="Soft Skills">
                <p>{data.softSkills?.join(', ')}</p>
            </Section>

            <Section title="Key Courses Taken">
                <ul>
                    {data.courses?.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Achievements">
                <p>{data.achievements}</p>
            </Section>

            <Section title="Hobbies">
                <p>{data.hobbies?.join(', ')}</p>
            </Section>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {children}
        </div>
    );
}

export default ResumePreview;*/
/*

import React from 'react';

function ResumePreview({ data }) {
    return (
        <div
            id="resumePreview"
            className="bg-white shadow-md mx-auto p-12"
            style={{ width: '210mm', minHeight: '297mm', padding: '20mm', fontSize: '12pt', lineHeight: '1.6' }}
        >
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <p className="text-lg">{data.phone}</p>
                <p className="text-lg">{data.email}</p>
            </div>

            {data.profilePhoto && (
                <div className="text-center mb-6">
                    <img src={data.profilePhoto} alt="Profile" className="w-32 h-32 mx-auto rounded-full" />
                </div>
            )}

           {/*Section title="Education">
            <ul>
                        {data.education.map((edu, index) => (
                            <li key={index} className="mb-2">
                                <p className="font-semibold">{edu.degree} - {edu.institute}</p>
                                <p>{edu.year} | {edu.percentage}</p>
                            </li>
                        ))}
                    </ul>
          /*  </Section>*//*}
             <Section title="Education">
               {data.education?.length ? (
                   <ul>
                       {data.education.map((edu, index) => (
                           <li key={index} className="mb-2">
                               <p className="font-semibold">{edu.degree} - {edu.institute}</p>
                               <p>{edu.year} | {edu.percentage}</p>
                           </li>
                       ))}
                   </ul>
               ) : (
                   <p>No education added yet.</p>
               )}
           </Section>

            <Section title="Experience">
            {data.experience?.map((exp, index) => (
                    <div key={index} className="mb-2">
                        <p className="font-semibold">{exp.jobTitle} at {exp.company}</p>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </Section>

            <Section title="Projects">
                {/*data.projects.length ? (
                    data.projects.map((proj, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-semibold">{proj.projectTitle}</p>
                            <p>{proj.description}</p>
                            <a href={proj.link} className="text-blue-500">{proj.link}</a>
                        </div>
                    ))
                ) : <p>No projects added yet.</p>*//*}
                 {data.projects?.map((proj, index) => (
                     <div key={index} className="mb-2">
                     <p className="font-semibold">{proj.projectTitle}</p>
                     <p>{proj.description}</p>
                     <a href={proj.link} className="text-blue-500">{proj.link}</a>
                 </div>
                ))}

            </Section>

            {/*<Section title="Technical Skills">
                {data.technicalSkills.length ? (
                    <p>{data.technicalSkills.join(', ')}</p>
                ) : <p>No technical skills added yet.</p>}
            </Section>

            <Section title="Soft Skills">
                {data.softSkills.length ? (
                    <p>{data.softSkills.join(', ')}</p>
                ) : <p>No soft skills added yet.</p>}
            </Section>

            <Section title="Key Courses Taken">
                {data.courses.length ? (
                    <ul>
                        {data.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                ) : <p>No courses added yet.</p>}
            </Section>

            <Section title="Achievements">
                {data.achievements ? (
                    <p>{data.achievements}</p>
                ) : <p>No achievements added yet.</p>}
            </Section>

            <Section title="Hobbies">
                {data.hobbies.length ? (
                    <p>{data.hobbies.join(', ')}</p>
                ) : <p>No hobbies added yet.</p>}
            </Section>*///}
            {/* <Section title=" Skills">
                <p>{data.Skills?.join(', ')}</p>
            </Section>*/} 
          /*   <Section title="Skills">
                <p>{data.Skills?.join(', ')}</p>
            </Section>

            <Section title="Soft Skills">
                <p>{data.softSkills?.join(', ')}</p>
            </Section>

            <Section title="Key Courses Taken">
                <ul>
                    {data.courses?.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Achievements">
                <p>{data.achievements}</p>
            </Section>

            <Section title="Hobbies">
                <p>{data.hobbies?.join(', ')}</p>
            </Section>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {children}
        </div>
    );
}

export default ResumePreview;

*/

/*
import React from 'react';

function ResumePreview({ data }) {
    return (
        <div
            id="resumePreview"
            className="bg-white shadow-md mx-auto p-12 border border-gray-300 rounded-lg"
            style={{
                width: '100%',
                maxWidth: '210mm',
                minHeight: '297mm',
                padding: '20mm',
                fontSize: '12pt',
                lineHeight: '1.6',
                fontFamily: 'Times New Roman, Times, serif',
                color: 'black',
            }}
        >
            <div className="flex justify-between items-center mb-6">
                <img src={data.logo} alt="Logo" className="w-20 h-20" />
                <div className="text-right">
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <p className="text-lg">{data.phone}</p>
                    <p className="text-lg">{data.email}</p>
                </div>
            </div>

            <Section title="Education" data={data.education} />
            <Section title="Experience" data={data.experience} />
            <Section title="Projects" data={data.projects} />
            <Section title="Skills" data={data.Skills} />
            <Section title="Soft Skills" data={data.softSkills} />
            <Section title="Key Courses Taken" data={data.courses} />
            <Section title="Achievements" data={data.achievements} />
            <Section title="Hobbies" data={data.hobbies} />
        </div>
    );
}

function Section({ title, data }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 border-b border-gray-400">{title}</h2>
            {Array.isArray(data) ? (
                <ul className="list-disc pl-5 space-y-2">
                    {data.map((item, index) => (
                        <li key={index}>
                            <p className="font-semibold">{item.degree || item.jobTitle || item.projectTitle || item}</p>
                            <p>{item.institute || item.company || item.description || item.percentage || item.link || item}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>{data}</p>
            )}
        </div>
    );
}

export default ResumePreview;
*/

import React from 'react';

function ResumePreview({ data }) {
    return (
        <div
            id="resumePreview"
            className="bg-white shadow-md mx-auto p-12 border border-gray-300 rounded-lg"
            style={{
                width: '100%',
                maxWidth: '210mm',
                minHeight: '297mm',
                padding: '20mm',
                fontSize: '12pt',
                lineHeight: '1.6',
                fontFamily: 'Times New Roman, Times, serif',
                color: 'black',
            }}
        >
            <div className="flex justify-between items-center mb-6">
                {data.logo ? (
                    <img src={data.logo} alt="Logo" className="w-20 h-20" />
                ) : (
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-200">
                        <span>No Logo</span>
                    </div>
                )}
                <div className="text-right">
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <p className="text-lg">{data.phone}</p>
                    <p className="text-lg">{data.email}</p>
                </div>
            </div>

            <Section title="Education" data={data.education} />
            <Section title="Experience" data={data.experience} />
            <Section title="Projects" data={data.projects} />
            <Section title="Skills" data={data.Skills} />
            <Section title="Soft Skills" data={data.softSkills} />
            <Section title="Key Courses Taken" data={data.courses} />
            <Section title="Achievements" data={data.achievements} />
            <Section title="Hobbies" data={data.hobbies} />
        </div>
    );
}

function Section({ title, data }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 border-b border-gray-400">{title}</h2>
            {Array.isArray(data) ? (
                <ul className="list-disc pl-5 space-y-2">
                    {data.map((item, index) => (
                        <li key={index}>
                            <p className="font-semibold">{item.degree || item.jobTitle || item.projectTitle || item}</p>
                            <p>{item.institute || item.company || item.description || item.percentage || item.link || item}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>{data}</p>
            )}
        </div>
    );
}

export default ResumePreview;


