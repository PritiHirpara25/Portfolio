export default function Skills() {

    const skill = [
        { label: 'HTML', value: 80 },
        { label: 'CSS', value: 80 },
        { label: 'JS', value: 70 },
        { label: 'React', value: 75 },
    ]

    return (
        <div>
            <h1 className='font-semibold text-3xl mb-4'>My Skills.</h1>
            <div className='space-y-3'>
                {skill.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                        <div className="flex justify-between">
                            <label>{item.label}</label>
                            <span className="text-[#bcbcbc]">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-xl">
                            <div
                                className={"bg-gradient-to-r from-black to-pink-500 h-1.5 rounded-xl"}
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}