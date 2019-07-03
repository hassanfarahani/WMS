<template>
  <div id="wells-view">
    <h1 class="wells-list-title">List of Available Wells</h1>

    <div class="wells-list">
        <table class="container table-content">            
            <thead>
                <tr>
                  <th>Well Name</th>
                  <th>Unique Identifier(uwid)</th>
                  <th>License Number</th>
                  <th>Area</th>
                  <th>Field</th>
                  <th>Total Depth</th>
                  <th>Drilling Date</th>
                  <th>Status</th>
                  <th>Edite</th>
                  <th>Delete</th>
                  <th>Well History</th>
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
                        <a @click="editWell({wellID: well.id, wellUWID: well.uwid})" href="#">
                          <i class="fa fa-pencil editIcon"></i>
                        </a>
                    </div>
                  </td>
                  <td>
                    <div class="well-delete">
                      <a @click="deleteWell(well.id)" href="#">
                        <i class="fa fa-trash removeIcon"></i>
                      </a>
                    </div>
                  </td>
                  <td>
                      <a @click="getHistory({wellName: well.wellName, wellId: well.id})" data-toggle="modal" data-target="#myModal" href="#">
                        <i class="fa fa-history"></i>
                      </a>
                      <app-well-history />
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  import WellHistory from '@/components/Wells/WellHistory.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      'app-well-history': WellHistory
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
      },
      getHistory(wellNameId) {
        this.$store.dispatch('getHistory', wellNameId);
      }
    }
  }
</script>

<style>


</style>