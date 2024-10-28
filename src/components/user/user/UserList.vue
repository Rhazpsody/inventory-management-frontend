<template>
    <div class="user-list">
        <div class="card">
            <div class="header">
                <h2>Daftar Pengguna</h2>
                <button @click="$emit('add-user')">Tambah Pengguna</button>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th class="action-column text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.username }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                            <td class="text-center">
                                <button @click="$emit('edit-user', user)">Edit</button>
                                <button @click="deleteUser(user.id)">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, username: 'Budi', email: 'budi@gmail.com', role: 'admin' },
                { id: 2, username: 'Andi', email: 'andi@gmail.com', role: 'user' },
                { id: 3, username: 'Tono', email: 'tono@gmail.com', role: 'admin' },
                { id: 1, username: 'Alexander', email: 'Abah@gmail.com', role: 'user' },
                { id: 2, username: 'Thomas', email: 'Thoto@gmail.com', role: 'admin' },
                { id: 3, username: 'Plankton', email: 'Anton@gmail.com', role: 'user' }
            ]
        };
    },
    methods: {
        deleteUser(id) {
            this.users = this.users.filter(user => user.id !== id);
            this.$emit('delete-user', id);
        }
    }
}
</script>

<style scoped>

/* Card styling */
.card {
    width: 82%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    
}

/* Table styling */
.table-responsive {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f4f4f8;
    color: rgb(17, 16, 16);
}

td {
    color: #070707;
}

button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

button:first-of-type {
    background-color: #42b983; /* Green for Edit button */
}

button:last-of-type {
    background-color: #5045b1; /* Purple for Delete button */
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;
}

h2 {
    color: black;
    font-weight: bold;
    text-align: center;
}
</style>
