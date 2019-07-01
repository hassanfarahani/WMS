<template>
    <div class="box container">
      <div class="box-title">
          <h2>Input Well Data</h2>
      </div>
      <form @submit.prevent="submit">
        <div class="inputBox required">
          <input
                  type="text"
                  id="wellName"
                  v-model="wellData.wellName" required>
          <label for="wellName">Well Name</label>
        </div>

        <div class="inputBox required"> 
          <input
                  type="text"
                  id="uniqueIdentifier"
                  v-model="wellData.uwid" required>
          <label for="uniqueIdentifier">Unique Identifier</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="licenseNumber"
                  v-model="wellData.licenseNumber">
          <label for="licenseNumber">License Number</label>

        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="area"
                  v-model="wellData.area">
          <label for="area">Area</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="field"
                  v-model="wellData.field">
          <label for="field">Field</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="totalDepth"
                  v-model="wellData.totalDepth">
          <label for="totalDepth">Total Depth</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="drillingDate"
                  v-model="wellData.drillingDate">
          <label for="drillingDate">Drilling Date</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="status"
                  v-model="wellData.status">
          <label for="status">Status</label>

        </div>

        <div class="submit-btn notRequired">
          <button type="submit">Add New Well</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wellData: {
                wellName: '',
                uwid: '',
                licenseNumber: '',
                area: '',
                field: '',
                totalDepth: '',
                drillingDate: '',
                status: ''
            }
        }
    },
    computed: {},
    methods: {
        submit() {
            this.$store.dispatch('addNewWell', this.wellData);
        }
        // clearFields() {
        //     this.wellName = '';
        //     this.uwid = '';
        //     this.licenseNumber = '';
        //     this.area = '';
        //     this.field = '';
        //     this.totalDepth = '';
        //     this.drillingDate = '';
        //     this.status = '';
        // }
    }
}
</script>

<style>
    
</style>
