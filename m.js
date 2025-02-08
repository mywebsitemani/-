let gl1 = new GLLOAD()
let draco = new DRACOLoader()
draco.setDecoderpath('../draco/')
gll.lod(
    '1.glb',(model)=>{
        screen.add(model.scene)
    }
)

model1.position.z = -1
model2.position.z = -1.2
model3.position.z = -0.2

const mouse = {
    x: 0
}

window.addEventListener('mousemove' , (event)=>
{
    mouse.x = event.clientX / sizes.width - 0.5
})

let animation=()=>{
    model1.position.x = mouse.x * 0.5
    model2.position.x = mouse.x * 1.5
    model3.position.x = mouse.x * -0.5
}