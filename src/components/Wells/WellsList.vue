<template>
  <div>
    <h1 class="wells-list-title">List of Available Wells</h1>

    <div class="wells-list">
        <table class="container table-content">            
            <thead>
                <tr>
                  <th>Well Name</th>
                  <th>Unique Identifier</th>
                  <th>License Number</th>
                  <th>Area</th>
                  <th>Field</th>
                  <th>Total Depth</th>
                  <th>Drilling Date</th>
                  <th>Status</th>
                  <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="well in wells" :key="well.id">
                  <td>{{ well.wellName }}</td>
                  <td>{{ well.uwid }}</td>
                  <td>{{ well.licenseNumber }}</td>
                  <td>{{ well.area }}</td>
                  <td>{{ well.field }}</td>
                  <td>{{ well.totalDepth }}</td>
                  <td>{{ well.drillDate }}</td>
                  <td>{{ well.status }}</td>
                  <td>
                    <div class="well-edit-delete">
                        <a @click="editWell({wellID: well.id, wellUWID: well.uwid})" href="#" class="edit">
                          <i class="fa fa-pencil"></i>
                        </a>
                        <a @click="deleteWell(well.id)" href="#" class="delete">
                          <i class="fa fa-trash remove"></i>
                        </a>
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {

      }
    },
    computed : {
      wells() {
        return this.$store.state.wells;
      }
    },
    created () {
      this.$store.dispatch('getWells');
    },
    methods: {
      deleteWell(wellId) {
        this.$store.dispatch('deleteWell', wellId);
      },
      editWell(wellIdUwid) {
        this.$store.dispatch('editWell', wellIdUwid);
      }
    }
  }
</script>

<style>


</style>