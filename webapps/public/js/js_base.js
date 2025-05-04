

$(document).on("click", ".view", function () {
    const href = $(this).attr("href")
    const label = $(this).attr("data-label")

    $("#myLargeModalBody").load(href)
    $("#myLargeModalLabel").html(label)
})


$(document).on("click", ".views", function () {
    const href = $(this).attr("href")
    const label = $(this).attr("data-label")

    $("#myLargeModalBody").load(href)
    $("#myLargeModalLabel").html(label)
})

$(document).on("click", ".delete", function (event) {
    event.preventDefault();
    const deleteLink = $(this)
    const href = deleteLink.attr("href");
    const jwtToken = deleteLink.attr("data-token");
    Swal.fire({
        title: "Peringatan",
        text: "Yakin ingin menghapus data ?",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batalkan"
    }).then(function (t) {
        if (t.value) {
            $.ajax({
                url: href,
                method: "DELETE",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
                },
                success: function (data) {
                    if (data.status == 200) {
                        Swal.fire("Success", "Data berhasil dihapus!.", "success")
                        actControl("data")
                    } else {
                        Swal.fire("Terjadi Error!", data.message, "error")
                    }
                },
                error: function (error) {
                    console.log("ERROR")
                }
            })
        }
    })
})


$(document).on("click", "#simpanButton", function (event) {
    event.preventDefault();
    const form = $("#forms");
    const href = form.attr("data-href");
    const jwtToken = form.attr("data-token");
    const formData = new FormData(form[0]);
    const formDataObj = {};
    formData.forEach((value, key) => {
        if (key === "train_carriages[]" || key === 'devices') {
            if (!formDataObj[key]) {
                formDataObj[key] = [];
            }
            formDataObj[key].push(value);
        } else {
            formDataObj[key] = value;
        }
    });

    const jsonData = JSON.stringify(formDataObj);
    $(this).prop("disabled", true)

    $.ajax({
        url: href,
        type: "POST",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data")
            $(".alert-success").show()
            $("#success-message").text("Data berhasil ditambahkan !")
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide()
            }, 5000)
        },
        error: function (error) {
            $(".alert-warning").show()
            $("#error-message").text(error.responseJSON.message)
        },
        complete: function () {
            $("#simpanButton").prop("disabled", false)
        }
    })
})


$(document).on("click", "#simpanButtonArr", function (event) {
    event.preventDefault();

    const form = $("#forms");
    const href = form.attr("data-href");
    const jwtToken = form.attr("data-token");

    const formData = form.serializeArray();

    const formDataObj = new FormData();

    formData.forEach((field) => {
        if (field.name === "privilage[]") {
            formDataObj.append(field.name, field.value);
        } else {
            formDataObj.append(field.name, field.value);
        }
    });

    $(this).prop("disabled", true);

    $.ajax({
        url: href,
        type: "POST",
        data: formDataObj,
        processData: false,
        contentType: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data");
            $(".alert-success").show();
            $("#success-message").text("Data berhasil ditambahkan !");
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide();
            }, 5000);
        },
        error: function (error) {
            $(".alert-warning").show();
            $("#error-message").text(error.responseJSON.message);
        },
        complete: function () {
            $("#simpanButtonArr").prop("disabled", false);
        }
    });
});



$(document).on("click", "#updateButtonArr", function (event) {
    event.preventDefault();

    const form = $("#forms_update");
    const href = form.attr("data-href");
    const jwtToken = form.attr("data-token");

    const formData = form.serializeArray();

    const formDataObj = new FormData();

    formData.forEach((field) => {
        if (field.name === "privilage[]") {
            formDataObj.append(field.name, field.value);
        } else {
            formDataObj.append(field.name, field.value);
        }
    });

    $(this).prop("disabled", true);

    $.ajax({
        url: href,
        type: "PUT",
        data: formDataObj,
        processData: false,
        contentType: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data");
            $(".alert-success").show();
            $("#success-message").text("Data berhasil diupdate !")
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide();
            }, 4000);
        },
        error: function (error) {
            $(".alert-warning").show();
            $("#error-message").text(error.responseJSON.message);
        },
        complete: function () {
            $("#updateButtonArr").prop("disabled", false);
        }
    });
});





$(document).on("click", "#updateButton", function (event) {
    event.preventDefault();
    const form = $("#forms_update");
    const href = form.attr("data-href");
    const formData = new FormData(form[0]);
    const jwtToken = form.attr("data-token");
    const formDataObj = {};
    formData.forEach((value, key) => {
        if (key === "train_carriages[]" || key === 'devices') {
            if (!formDataObj[key]) {
                formDataObj[key] = [];
            }
            formDataObj[key].push(value);
        } else {
            formDataObj[key] = value;
        }
    });

    const jsonData = JSON.stringify(formDataObj);
    $(this).prop("disabled", true)

    $.ajax({
        url: href,
        type: "PUT",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data")
            $(".alert-success").show()
            $("#success-message").text("Data berhasil diupdate !")
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide()
            }, 5000)
        },
        error: function (error) {
            $(".alert-warning").show()
            $("#error-message").text(error.responseJSON.message)
        },
        complete: function () {
            $("#updateButton").prop("disabled", false)
        }
    })
})


$(document).on("click", "#closeModal", function () {
    $("#modal_theme_primary").modal("hide");
})

$(document).on("click", ".update", function (event) {
    event.preventDefault();
    const updateLink = $(this)
    const href = updateLink.attr("href");
    const jwtToken = updateLink.attr("data-token");
    const status = updateLink.attr("data-status");

    // if (status === false) {
    //     status = true
    // } else status === true{
    //     status = false
    // }

    console.log(status)
    const jsonData = JSON.stringify({
        status: status
    });
    Swal.fire({
        title: "Peringatan",
        text: "Yakin ingin merubah status ?",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Ya, Lanjutkan!",
        cancelButtonText: "Batalkan"
    }).then(function (t) {
        if (t.value) {
            $.ajax({
                url: href,
                method: "POST",
                enctype: "multipart/form-data",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
                },
                success: function (data) {
                    if (data.status == 200) {
                        Swal.fire("Success", "Status berhasil diubah!.", "success")
                        actControl("data")
                    } else {
                        Swal.fire("Terjadi Error!", data.message, "error")
                    }
                },
                error: function (error) {
                    console.log("ERROR")
                }
            })
        }
    })
})

$(document).on("click", "#connectButton", function (event) {
    event.preventDefault();
    const form = $("#serialport");
    const href = form.attr("data-href");
    const jwtToken = form.attr("data-token");
    const formData = new FormData(form[0]);
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    const jsonData = JSON.stringify(formDataObj);
    $(this).prop("disabled", true)

    $.ajax({
        url: href,
        type: "POST",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            console.log(json)
            $(".alert-success").show()
            $("#success-message").text(json.message)
            setTimeout(function () {
                $(".alert-success").hide()
            }, 2000)
            setTimeout(function () {
                location.reload()
            }, 1000)
        },
        error: function (error) {
            $(".alert-warning").show()
            $("#error-message").text(error.responseJSON.message)
        },
        complete: function () {
            // Mengaktifkan kembali tombol "Simpan" setelah permintaan Ajax selesai
            $("#connectButton").prop("disabled", false)
        }
    })
})


$(document).on("click", "#modalConnectedButton", function (event) {
    event.preventDefault();
    const form = $("#serialport");
    let href = ''
    let jwtToken = ''
    const connectButton = $(this);
    let formData = ''
    let jsonData = ''
    if (form.length === 0) {
        href = connectButton.attr("data-href");
        jwtToken = connectButton.attr("data-token");
        formData = new FormData();
        if (form.length > 0) {
            formData = new FormData(form[0]);
        }
        jsonData = JSON.stringify(Object.fromEntries(formData));
        connectButton.prop("disabled", true);

    } else {
        href = form.attr("data-href");
        jwtToken = form.attr("data-token");
        formData = new FormData(form[0]);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        jsonData = JSON.stringify(formDataObj);
        $(this).prop("disabled", true)
    }


    $.ajax({
        url: href,
        type: "POST",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            location.reload()
        },
        error: function (error) {
            $(".alert-warning").show()
            $("#error-message").text(error.responseJSON.message)
        },
        complete: function () {
            $("#modalConnectedButton").prop("disabled", false)
        }
    })
})


$(document).on("click", "#rfidUpdateButton", function (event) {
    event.preventDefault();
    const form = $("#rfid_update");
    const href = form.attr("data-href");
    const formData = new FormData(form[0]);
    const jwtToken = form.attr("data-token");
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    const jsonData = JSON.stringify(formDataObj);
    $(this).prop("disabled", true)

    $.ajax({
        url: href,
        type: "PUT",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data")
            $(".alert-success").show()
            $("#success-message").text("Data berhasil diupdate !")
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide()
            }, 5000)
        },
        error: function (error) {
            $(".alert-warning").show()
            $("#error-message").text(error.responseJSON.message)
        },
        complete: function () {
            // Mengaktifkan kembali tombol "Simpan" setelah permintaan Ajax selesai
            $("#updateButton").prop("disabled", false)
        }
    })
})


// manual updates
$(document).on("click", "#manualutton", function (event) {
    event.preventDefault();
    const form = $("#formsmanual");
    const href = form.attr("data-href");
    const jwtToken = form.attr("data-token");
    const formData = new FormData(form[0]);
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    const jsonData = JSON.stringify(formDataObj);
    $(this).prop("disabled", true)

    $.ajax({
        url: href,
        type: "POST",
        enctype: "multipart/form-data",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
        },
        success: function (json) {
            actControl("data")
            $(".alert-success").show()
            $("#success-message").text("Data berhasil ditambahkan !")
            $("#modal_theme_primary").modal("hide");
            setTimeout(function () {
                $(".alert-success").hide()
            }, 5000)
        },
        error: function (error) {
            $(".alert-warnings").show()
            $("#error-messages").text(error.responseJSON.message)
            setTimeout(function () {
                $(".alert-warning").hide()
            }, 5000)
        },
        complete: function () {
            // Mengaktifkan kembali tombol "Simpan" setelah permintaan Ajax selesai
            $("#manualutton").prop("disabled", false)
        }
    })
})
