/**
 * Created by Administrator on 2016/7/18.
 */
var area = new LArea();
area.init({
    'trigger': '#demo1',//����ѡ��ؼ����ı���ͬʱѡ����Ϻ�name�����������λ��
    'valueTo':'#value1',//ѡ����Ϻ�id�����������λ��
    'keys':{id:'id',name:'name'},//������Դ����ֶ� id��ӦvalueTo��value������� name��Ӧtrigger��value�������
    'type':1,//����Դ����
    'data':LAreaData//����Դ
});
