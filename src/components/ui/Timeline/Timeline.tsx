import React from 'react'
import timeline from './timeline.json'

function Timeline() {
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-5 px-10">
            {timeline.map((data)=>(

            <li>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className={data['timeline-position']}>
                    <time className="font-mono italic">{data.year}</time>
                    <div className="text-lg font-black">{data.title}</div>
                    <p>{data.description}</p>
                </div>
                <hr />
            </li>
            ))}
        </ul>
    </div>
    )
}

export default Timeline