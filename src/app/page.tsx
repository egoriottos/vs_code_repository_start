import Link from "next/link"
const test = () =>{
    let testObj = [
        {
        id: 1,
        name:'Лада',
        description: 'Российский мусор',
        price: 20000000,
        engine_power: 90
        },
        {
        id: 2,
        name:'Газель',
        description: 'Туда же к Ладе',
        price: 10000000,
        engine_power: 110
        },
        {
            id: 3,
            name:'Ламба',
            description: 'Пушка',
            price: 9000000000000,
            engine_power: 390
        }, 
        {
            id: 4,
            name:'БМВ',
            description: '3 серия 10 года',
            price: 1300000,
            engine_power: 250
        }, 
        {
            id: 5,
            name:'Мерседес',
            description: 'Для неудачников',
            price: 50000000,
            engine_power: 270
        },
        {
            id: 6,
            name:'Шкода',
            description: 'Достойна особенно актавиа',
            price: 2500000,
            engine_power: 170
        },
        {
            id: 7,
            name:'Форд',
            description: 'Фокус 3 пушка',
            price: 17000000,
            engine_power: 140
        },           
    ]
    return(
        <>
            <table className='table border rounded bg-amber-200 items-center w-full mt-20'>
                <thead>
                    <tr className="content-center">
                        <th className="border'">ID</th>
                        <th className="border">TITLE</th>
                        <th className="border">DESCRIPTION</th>
                        <th className="border">PRICE</th>
                        <th className="border">ENGINE POWER</th>
                    </tr>
                </thead>
                <tbody className="content-center rounded">
                {testObj.map(item => {
						return (
							<>
								<tr>
									<td className='border'>
										<Link href={`/${item.id}`}>{item.id}</Link>
									</td>
									<td className='border text-center'>{item.name}</td>
									<td className='border text-center'>{item.description}</td>
                  <td className='border text-center'>{item.price}</td>
                  <td className='border text-center'>{item.engine_power}</td>
								</tr>
							</>
						)
					})}
                </tbody>
            </table>
        </>
    )
}
export default test





