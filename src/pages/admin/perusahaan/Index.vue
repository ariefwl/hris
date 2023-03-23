<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-content>
          <router-link :to="{ name: 'perusahaan.create' }" class="btn btn-outline-primary mb-3"
            >Tambah Data</router-link
          >
          <h1 class="mb-4">DATA PERUSAHAAN</h1>
          <div class="table-responsive">
            <table id="tblPerusahaan" class="table table-bordered table-striped display">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Perusahaan</th>
                  <th>Alamat</th>
                  <th>Kota</th>
                  <th>Telepon</th>
                  <th>P.I.C</th>
                  <th>Proses</th>
                </tr>
              </thead>
            </table>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'

  export default {
    mounted() {
      this.getPerusahaan()
    },
    methods: {
      getPerusahaan() {
        axios
          .get('http://api101.lapaksemarang.com/api/companies')
          .then((response) => {
            $('#tblPerusahaan').DataTable({
              data: response.data.data,
              responsive: true,
              autoWidth: true,
              dom: 'frtip',
              scrollY: false,
              columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'address' },
                { data: 'region' },
                { data: 'phone' },
                { data: 'contact_person' },
                {
                  data: 'id',
                  render: function (data) {
                    return (
                      "<div class='btn-group btn-group-sm' role='group'> " +
                      "<button type='button' class='btn btn-outline-success'>Edit</button>" +
                      "<button type='button' class='btn btn-outline-danger'>Hapus</button>" +
                      '</div>'
                    )
                  },
                },
              ],
            })
          })
          .catch((error) => console.log(error.response))
      },
    },
  }
</script>

<style>
  @import 'datatables.net-bs5';
</style>
