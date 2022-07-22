const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("Furkan")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("FurkanV2")

const helloFuncV3 = (firstName,lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("FurkanV3","Sakız")

const helloFuncV4 = (firstName,lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("FurkanV4","Sakız")