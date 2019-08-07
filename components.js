Vue.component('appRow', {
  data() {
    return {
      isHovering: false,
      isRow: false,
      activeRow: null,
      
    }
  },
  template: `
  <section class="hl_page-creator--section"
  style="background-color: #f4f4f4; padding: 80px 0; text-align: center;" @mouseover.stop="isHovering = true" 
  @mouseout.stop="isHovering = false" 
  :class="{'active': isHovering}">
  <div class="hl_page-creator--actions">
    <div class="move-actions">
      <span data-tooltip="tooltip" data-placement="right" title="Up"><i
          class="icon icon-arrow-up-2"></i></span>
      <span data-tooltip="tooltip" data-placement="right" title="Down"><i
          class="icon icon-arrow-down-2"></i></span>
    </div>
    <div class="more-actions">
      <span data-tooltip="tooltip" data-placement="left" title="Settings"><i class="fas fa-cog"></i></span>
      <span data-tooltip="tooltip" data-placement="left" title="Clone"><i class="far fa-eye"></i></span>
      <span data-tooltip="tooltip" data-placement="left" title="Save"><i class="far fa-copy"></i></span>
      <span data-tooltip="tooltip" data-placement="left" title="Delete"><i
          class="far fa-trash-alt"></i></span>
    </div>
  </div>
  <span class="add-new-section" data-tooltip="tooltip" data-placement="bottom" title="Add New Section"><i
      class="icon icon-plus"></i></span>
  <div class="hl_page-creator--row" @mouseover.stop="isRow = true" 
  @mouseout.stop="isRow = false" 
  :class="{'active': isRow}">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Up"><i
            class="icon icon-arrow-up-2"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Down"><i
            class="icon icon-arrow-down-2"></i></span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Settings"><i class="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete"><i
            class="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span class="add-new-row" data-tooltip="tooltip" data-placement="bottom" title="Add New Row"><i
        class="icon icon-plus"></i></span>

    <div class="hl_page-creator--column">
    

      <slot name="title"></slot>


      <slot></slot>


    </div>


  </div>


  <!-- add second row here -->


<!-- </div> -->



<!-- </div> -->
</section>
  `
})

Vue.component('appHeadline', {
  data() {
    return {
      isEl: false
    }
  },
  template: `
  <div>
   <div class="hl_page-creator--element" @mouseover.stop="isEl = true" 
   @mouseout.stop="isEl = false" 
   :class="{'active': isEl}">
  <div class="hl_page-creator--actions">
    <div class="more-actions">
      <span data-tooltip="tooltip" data-placement="top" title="Move"><i
          class="fas fa-arrows-alt"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Clone"><i
          class="far fa-eye"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Save"><
          class="far fa-copy"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Delete"><i
          class="far fa-trash-alt"></i></span>
    </div>
  </div>
  <span class="add-new-element" data-tooltip="tooltip" data-placement="bottom"
    title="Add New Element"><i class="icon icon-plus"></i></span>
  <div class="element-container">
    <h1>Heading Text Goes Here</h1>
  </div>
</div> 
</div>
  `
})

Vue.component('appParagraph', {
  data() {
    return {
      isEl: false
    }
  },
  template: `
<div class="hl_page-creator--element" @mouseover.stop="isEl = true" 
@mouseout.stop="isEl = false" 
:class="{'active': isEl}">
  <div class="hl_page-creator--actions">
    <div class="more-actions">
      <span data-tooltip="tooltip" data-placement="top" title="Move"><i
          class="fas fa-arrows-alt"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Clone"><i
          class="far fa-eye"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Save"><i
          class="far fa-copy"></i></span>
      <span data-tooltip="tooltip" data-placement="top" title="Delete"><i
          class="far fa-trash-alt"></i></span>
    </div>
  </div>
  <span class="add-new-element" data-tooltip="tooltip" data-placement="bottom"
    title="Add New Element"><i class="icon icon-plus"></i></span>
  <div class="element-container" style="max-width: 700px; margin: 0 auto;">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem architecto quas mollitia
      voluptates iure consequuntur totam numquam quasi quaerat, iste, libero asperiores optio
      praesentium autem culpa doloremque laudantium in deleniti,
      corrupti eaque illo nam quae. Vel nesciunt, libero ipsa similique ipsum ducimus fuga magni.
      Voluptatum iste pariatur cum doloremque est.</p>
  </div>
</div>  
  `
})

Vue.component('RowElement', {
  props: ['icon', 'text'],
  computed: {
    iconClass() {
      return `fas fa-${this.icon}`
    }
  },
  template: ` <div class="element-card">
  <div class="icon">
    <i :class="iconClass"></i>
  </div>
  <h5>{{text}}</h5>
</div>`
})


new Vue({
  el: '#el',
  data() {
    return {
      rows: [],
      showRow: false,
      showGroup: false,
      activeRow: null
    }
  },
  methods: {
    addRow() {
      this.rows.push({
        id: this.rows.length,
        elements: []
      })
    },
    addElementToActiveRow(type) {
      this.rows[this.activeRow].elements.push({
        id: this.rows[this.activeRow].elements.length,
        type: type
      })
    },
    openRow() {
      this.showRow = !this.showRow;
    },
    openGroup() {
      this.showGroup = !this.showGroup;
    }
  }
})