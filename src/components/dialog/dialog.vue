<template>
    <div class="dialog">
        <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
        <div class="dialog-cover back" v-if="isShow" @click="closeDialog"></div>
        <!-- transition 这里可以加一些简单的动画效果 -->
        <transition name="drop">
            <!--style 通过props 控制内容的样式  -->
            <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}" v-if="isShow">
                <div class="dialog-head">
                    <!--弹窗头部 title-->
                    <slot name="header">提示信息</slot>
                </div>
                <div class="dialog-main">
                    <!--弹窗的内容-->
                    <slot name="main">弹窗内容</slot>
                </div>
                <!--弹窗关闭按钮-->
                <div class="dialog-close" @click="closeDialog">x</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            time: 3000
        };
    },
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true
        },
        widNum: {
            type: Number,
            default: 86.5
        },
        leftSite: {
            type: Number,
            default: 6.5
        },
        topDistance: {
            type: Number,
            default: 35
        }
    },
    mounted() {},
    methods: {
        closeDialog() {
            this.$emit('on-close');
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
/** 弹窗动画*/
.drop-enter-active {
    transition: all 0.5s ease;
}
.drop-enter {
    transform: translateY(-500px);
}
.drop-leave-active {
    transition: all 0.3s ease;
    transform: translateY(-500px);
}
.dialog {
    position: relative;
    color: #2e2c2d;
    font-size: 16px;
    .dialog-cover {
        @extend %pf;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 200;
    }
    .dialog-content {
        @extend %pf;
        top: 35%;
        justify-content: center;
        align-items: center;
        z-index: 300;
        .dialog-head {
            @extend %df;
            height: 44px;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 10px 10px 0 0;
        }
        .dialog-main {
            @extend %df;
            justify-content: center;
            align-content: center;
            padding: 22px 0 47px 0;
            border-radius: 0 0 10px 10px;
            background: #fff;
        }
        .dialog-close {
            @extend %df;
            margin: -25px auto 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #fcca03;
            justify-content: center;
            align-content: center;
            font-size: 30px;
        }
    }
}
</style>