export class ImagePreview {
  constructor(element) {
    this.element = element;
    this.target = $(element).attr("data-preview-target");
    this.targetElement = $(`[data-preview=${this.target}]`);
    this.currentImage = this.targetElement.attr("src");
    this.reader = new FileReader();
    this.init();
  }

  init() {
    this.element.on("change", (event) => {
      const files = event.target.files;
      if (files && files[0]) {
        this.reader.onload = (e) => {
          this.targetElement.attr("src", e.target.result);
        };
        this.reader.readAsDataURL(files[0]);
      } else {
        this.targetElement.attr("src", this.currentImage);
      }
    });
  }
}
