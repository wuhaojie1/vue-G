<template>
    <div id="release">
        <div class="release-container">
            <div class="release-container-title">
                <label>标题</label>
                <el-input v-model="title"
                          placeholder="请输入内容"
                          maxlength="200"
                          show-word-limit
                          class="input"></el-input>
            </div>

            <div class="release-container-overview">
                <label>概述</label>
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        class="input"
                        :rows="4"
                        v-model="textarea"
                        maxlength="200"
                        show-word-limit
                >
                </el-input>
            </div>

            <div class="release-container-imgs">
                <label>图片</label>
                <div class="release-container-imgBox">
                    <div class="release-container-img" v-for="(item,index) in imgData" :key="index">
                        <img :src="getObjectURL(item.file)">
                        <div class="iconBox">
                            <i class="el-icon-delete icon" @click="deleteMsg(item,index)"></i>
                        </div>
                        <el-input
                                type="textarea"
                                placeholder="请输入内容"
                                class="input"
                                :rows="8"
                                v-model="item.textarea"
                                @input="inputChange(item,index)"
                                maxlength="500"
                                show-word-limit
                        >
                        </el-input>
                    </div>
                </div>
            </div>

            <div class="release-container-upload">
                <!--<input type="file" @change="getpic" class="getInputFile"/>-->
                <input type="file" class="getInputFile" @change="getpic" ref="inputer" multiple
                       accept="image/png,image/jpeg,image/gif,image/jpg"/>
                <div class="upload">
                    <i class="el-icon-picture-outline-round uploadImg"></i>
                    <label>上传8M以内jpg或png</label>
                </div>
            </div>

            <div class="release-container-btn">
                <el-button type="danger" class="issue" @click="issue">发布故事</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "release",
        data() {
            return {
                textarea: '',
                title: '',
                files: {},
                imgData: [
                    // {
                    //     img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    //     textarea: '111111',
                    // },
                    // {
                    //     img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    //     textarea: '111111',
                    // }
                ],
            }
        },
        methods: {
            deleteMsg(item, index) {
                this.imgData.splice(index,1);
                console.log(this.imgData);
            },
            inputChange(item, index) {
                this.imgData[index].textarea = item.textarea;
            },
            getpic(e) {
                let files = e.target.files;
                this.files = files;
                // console.log(this.files)
                let tempArray = [];
                for (let i = 0; i < files.length; i++) {
                    // console.log(files[i]);
                    let obj = {
                        file: files[i],
                        textarea: ''
                    };
                    tempArray.push(obj)
                }
                this.imgData = tempArray;
                // console.log(tempArray)

                // if(this.files){
                //     this.files.append(files);
                // }

                // this.picParam = new FormData();
                // this.picParam.append('file', files);
                // console.log(this.picParam.get('file'));

            },
            getObjectURL(file) {
                let url = null;
                if (window.createObjectURL != undefined) { // basic
                    url = window.createObjectURL(file);
                } else if (window.URL != undefined) { // mozilla(firefox)
                    url = window.URL.createObjectURL(file);
                } else if (window.webkitURL != undefined) { // webkit or chrome
                    url = window.webkitURL.createObjectURL(file);
                }
                // console.log(url);
                return url;
            },
            issue() {

            }
        }
    }
</script>

<style scoped lang="less">
    #release {
        width: 100%;

        .release-container {
            width: 960px;
            margin: 0 auto;
            position: relative;

            .release-container-title {
                margin-top: 40px;
                display: flex;

                label {
                    width: 50px;
                    text-align: center;
                    line-height: 40px;
                }

                .input {
                    width: 600px;
                }
            }

            .release-container-overview {
                text-align: left;
                display: flex;

                label {
                    width: 50px;
                    text-align: center;
                    line-height: 40px;
                }

                .input {
                    width: 600px;
                }
            }

            .release-container-imgs {
                width: 100%;
                /*margin-top: 10px;*/
                display: flex;

                label {
                    width: 50px;
                    text-align: center;
                    line-height: 40px;
                }

                .release-container-imgBox {
                    width: 100%;

                    .release-container-img {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;
                        margin-top: 40px;

                        img {
                            width: 175px;
                            /*height: 150px;*/
                            /*border-radius: 5px;*/
                        }

                        .input {
                            margin-left: 10px;
                        }

                        .iconBox {
                            position: absolute;
                            width: 175px;
                            background: #e7e7e7;
                            bottom: 0;
                            height: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .icon:hover {
                                color: #5cb6ff;
                                cursor: pointer;
                            }
                        }

                        .iconBox:hover {
                            background: #e7e7e7;
                            opacity: 0.8;
                        }

                    }
                }


            }

            .release-container-upload {
                position: relative;
                display: flex;
                margin-top: 40px;
                height: 140px;

                .upload {
                    /*position: relative;*/

                    .uploadImg {
                        font-size: 100px;
                        position: absolute;
                        z-index: 1;
                        /*left: 49px;*/
                        /*top: 40px;*/
                        border: 1px solid #C0C4CC;
                        border-radius: 5px;
                        left: 45px;
                    }

                    .uploadImg:hover {
                        border-color: #66afe9 !important;
                        outline: 0;
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0)
                    }

                    label {
                        position: absolute;
                        bottom: 0px;
                        text-align: center;
                        left: 30px;
                    }
                }

                .getInputFile {
                    /*display: none;*/
                    position: absolute;
                    left: 45px;
                    z-index: 2;
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }

                .getInputFile:hover {
                    cursor: pointer;
                }
            }

            .release-container-btn {
                text-align: left;

                .issue {
                    margin-top: 40px;
                    margin-left: 40px;
                }
            }
        }
    }
</style>