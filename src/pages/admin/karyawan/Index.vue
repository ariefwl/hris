<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-content>
          <router-link :to="{ name: 'karyawan.create' }" class="btn btn-outline-primary mb-3">Tambah Data</router-link>
          <h1 class="mb-4">DATA KARYAWAN</h1>
          <div class="table-responsive">
            <table id="tblKaryawan" class="table table-striped table-bordered display">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>NIP</th>
                  <th>Nama Karyawan</th>
                  <th>Alamat</th>
                  <th>NIK</th>
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
      this.getKaryawan()
    },
    methods: {
      getKaryawan() {
        axios
          .get('https://api101.lapaksemarang.com/api/employees')
          .then((response) => {
            $('#tblKaryawan').DataTable({
              data: response.data.data,
              responsive: true,
              autoWidth: true,
              dom: 'frtip',
              scrollY: false,
              columns: [
                { data: 'id' },
                { data: 'nip' },
                { data: 'name' },
                { data: 'address' },
                { data: 'nik' },
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
