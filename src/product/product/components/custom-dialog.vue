<template>
	<el-dialog :class="diaClass" 
        :center="true" 
        :title="title" 
        :visible.sync="isShow" 
        :show-close="false" 
        :width="width" 
        :style="{height:height+'px'}"
        @close="onClose"
        :close-on-click-modal="false">
		<slot></slot>
		<!-- <span slot="footer" class="dialog-footer">
			<el-button class="button_custom" type="primary" @click="okClick">确定</el-button>
			<el-button class="button_" type="primary" @click="onClose">取消</el-button>
		</span> -->
	</el-dialog>
</template>
<script>
export default {
	name: 'custom-dialog',
	props: {
		isShow: {
			type: Boolean,
			default: false
		},
        diaClass:{
            type:String,
            defalut:'dialog_max'
        },
		title: {
			type: String,
			default: ''
		},
		width:{
            type:String,
        },
        height:{
            type:String,
        },
		onClose: {
			type: Function
		},
		okClick: {
			type: Function
		},
	}
};
</script>