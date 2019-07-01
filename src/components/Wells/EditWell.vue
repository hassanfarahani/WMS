<template>
    <div class="box container">
      <div class="box-title">
          <h2>Update Well Data</h2>
      </div>
      <form v-if="editedWellData" @submit.prevent="submit">
        <div class="inputBox required">
          <input
                  type="text"
                  id="wellName"
                  v-model="editedWellData.wellName" required>
          <label for="wellName">Well Name</label>
        </div>

        <div class="inputBox required"> 
          <input
                  type="text"
                  id="uniqueIdentifier"
                  v-model="editedWellData.uwid" required>
          <label for="uniqueIdentifier">Unique Identifier</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="licenseNumber"
                  v-model="editedWellData.licenseNumber">
          <label for="licenseNumber">License Number</label>

        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="area"
                  v-model="editedWellData.area">
          <label for="area">Area</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="field"
                  v-model="editedWellData.field">
          <label for="field">Field</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="totalDepth"
                  v-model="editedWellData.totalDepth">
          <label for="totalDepth">Total Depth</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="drillingDate"
                  v-model="editedWellData.drillingDate">
          <label for="drillingDate">Drilling Date</label>
        </div>

        <div class="inputBox notRequired">
          <input
                  type="text"
                  id="status"
                  v-model="editedWellData.status">
          <label for="status">Status</label>

        </div>

        <div class="submit-btn notRequired">
          <button type="submit">Update</button>
        </div>
      </form>
      <div v-else>There is no well to be updated! </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // wellData: {
            //     wellName: '',
            //     uwid: '',
            //     licenseNumber: '',
            //     area: '',
            //     field: '',
            //     totalDepth: '',
            //     drillingDate: '',
            //     status: ''
            // }
        }
    },
    computed: {
        editedWellData() {
            return this.$store.getters.editedWellData;
        }
    },
    methods: {
      submit() {
        this.$store.dispatch('getUpdateWell', this.editedWellData);
      }
    }
}
</script>

<style>
    
</style>
