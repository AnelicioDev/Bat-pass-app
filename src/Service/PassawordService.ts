export default function genererPass():string{
    let pass:string = ""
    let char:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    
    for(let i = 0; i < 8; i++){
        const randomIndex = Math.floor(Math.random() * char.length)
        pass += char[randomIndex]
    }
    return pass
}