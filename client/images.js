// ------------------- //
// GENERATING TEXTURES //
// ------------------- //

let imageGenerator;

export function generateTextures(scene) {
  console.log("Generating Textures...")
  
  imageGenerator = scene.add.graphics();


  imageGenerator.fillStyle(0xffffff, 1);
  imageGenerator.fillCircle(200, 200, 20);
  imageGenerator.generateTexture('imageCircle', 400, 400);
  imageGenerator.clear();
            
  imageGenerator.fillStyle(0xff0000, 1)
  imageGenerator.fillCircle(20, 20, 20);
  imageGenerator.fillStyle(0xffffff, 1)
  imageGenerator.fillCircle(20, 20, 18);
  imageGenerator.generateTexture('circleRedOutline', 40, 40);
  imageGenerator.clear();
  console.log("Textures Succesfully Generated!")
  
  imageGenerator.destroy();
}
