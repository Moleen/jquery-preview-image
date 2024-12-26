export class ImagePreview {
  constructor(element) {
    this.element = element;
    this.target = $(element).attr('data-preview-target');
    this.targetElement = $(`[data-preview=${this.target}]`);
    this.currentImage = this.targetElement.attr('src');
    this.reader = new FileReader();
  }

  init(){
    console.log('asdasd');
    
    this.element.on("change", (event) => {
        console.log('asdads');
        const files = event.target.files;
        if (files && files[0]) {
          this.reader.onload = (e) => {
           this.targetElement.attr("src", e.target.result);
          };
          this.reader.readAsDataURL(files[0]);
        } else {
            console.log(this.currentImage);
         this.targetElement.attr("src", this.currentImage);
        }
      });
  }
}
