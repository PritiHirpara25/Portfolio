export default function Skills() {

    const skill = [
        { label: 'HTML', value: 95 },
        { label: 'CSS', value: 95 },
        { label: 'JS', value: 95 },
        { label: 'React', value: 95 },
    ]

    return (
        <div>
            <h1 className='font-semibold text-3xl mb-4'>My Skills.</h1>
            <div className='space-y-3'>
                {skill.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                        <div className="flex justify-between">
                            <label>{item.label}</label>
                            <span className="text-gray-400">{item.value}%</span>
                        </div>
                        <div className="bg-gradient-to-r from purple-500 to-pink-700 h-1.5 rounded-xl shadow-white"
                            style={{ width: `${item.value}` }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}