<template>
    <div class="box container">
      <div class="box-title">
          <h2 class="font-weight-bold">Update Well Data</h2>
      </div>

      <form v-if="editedWellData" @submit.prevent.enter="submit">
        <div class="form-grid">
            <div class="label">
                <label for="wellName">Well Name</label>
            </div>
            <div>
                <input type="text" id="wellName" v-model="editedWellData.wellName" required>
            </div>

            <div class="label">
                <label for="uniqueIdentifier">Unique Identifier</label>
            </div>
            <div>
                <input type="text" id="uniqueIdentifier" v-model="editedWellData.uwid" required>
            </div>

            <div class="label">
                <label for="licenseNumber">License Number</label>
            </div>
            <div>
                <input type="text" id="licenseNumber" v-model="editedWellData.licenseNumber"> 
            </div>

            <div class="label">
                <label for="area">Area</label>
            </div>
            <div>
                <input type="text" id="area" v-model="editedWellData.area"> 
            </div>

            <div class="label">
                <label for="field">Field</label>
            </div>
            <div>
                <input type="text" id="field" v-model="editedWellData.field">
            </div>

            <div class="label">
                <label for="totalDepth">Total Depth (m)</label>
            </div>
            <div>
                <input type="text" id="totalDepth" v-model="editedWellData.totalDepth">
            </div>

            <div class="label">
                <label for="drillingDate">Drilling Date</label>
            </div>
            <div>
                <input type="text" id="drillingDate" v-model="editedWellData.drillingDate">
            </div>

            <div class="label">
                <label for="status">Status</label>
            </div>
            <div>
                <input type="text" id="status" v-model="editedWellData.status">
            </div>  
        </div>

        <div class="submit-btn">
          <button type="submit">Update Well</button>
        </div>

          <div class="submit-btn submit-btn-back">
            <button @click="backToPrevPage" type="button">Back</button>
          </div>
      </form>
     
      <div v-else>There is no well to be updated! </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        // Getting the well data,which is going to be edited (selected by user) from the store
        editedWellData() {
            return this.$store.getters.editedWellData;
    }
    },
    methods: {
      // Sending the updated well data (entered by the user) to the database
      submit() {
        this.$store.dispatch('getUpdateWell', this.editedWellData);
      },
      // Back to previous page
      backToPrevPage() {
        this.$router.go(-1);
      }
    }
}
</script>

<style>
    
</style>
