var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Proximidadeaosserviosdetratamento_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Proximidade aos serviços de tratamento',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Proximidadeaosserviosdetratamento_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5866381.814086, -3848786.823440, -5795405.600986, -3733029.626158]
                            })
                        });
var format_DensidadedasUBS_2 = new ol.format.GeoJSON();
var features_DensidadedasUBS_2 = format_DensidadedasUBS_2.readFeatures(json_DensidadedasUBS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadedasUBS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadedasUBS_2.addFeatures(features_DensidadedasUBS_2);
var lyr_DensidadedasUBS_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_DensidadedasUBS_2, 
                radius: 10 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: 'Densidade das UBS'
            });
var format_Localidadesdomunicpio_3 = new ol.format.GeoJSON();
var features_Localidadesdomunicpio_3 = format_Localidadesdomunicpio_3.readFeatures(json_Localidadesdomunicpio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdomunicpio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdomunicpio_3.addFeatures(features_Localidadesdomunicpio_3);
var lyr_Localidadesdomunicpio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdomunicpio_3, 
                style: style_Localidadesdomunicpio_3,
                popuplayertitle: 'Localidades do município',
                interactive: true,
                title: '<img src="styles/legend/Localidadesdomunicpio_3.png" /> Localidades do município'
            });
var format_Rodoviasdomunicpio_4 = new ol.format.GeoJSON();
var features_Rodoviasdomunicpio_4 = format_Rodoviasdomunicpio_4.readFeatures(json_Rodoviasdomunicpio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodoviasdomunicpio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodoviasdomunicpio_4.addFeatures(features_Rodoviasdomunicpio_4);
var lyr_Rodoviasdomunicpio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodoviasdomunicpio_4, 
                style: style_Rodoviasdomunicpio_4,
                popuplayertitle: 'Rodovias do município',
                interactive: true,
                title: '<img src="styles/legend/Rodoviasdomunicpio_4.png" /> Rodovias do município'
            });
var format_Unidadesdesade_5 = new ol.format.GeoJSON();
var features_Unidadesdesade_5 = format_Unidadesdesade_5.readFeatures(json_Unidadesdesade_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadesdesade_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadesdesade_5.addFeatures(features_Unidadesdesade_5);
var lyr_Unidadesdesade_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidadesdesade_5, 
                style: style_Unidadesdesade_5,
                popuplayertitle: 'Unidades de saúde',
                interactive: true,
                title: '<img src="styles/legend/Unidadesdesade_5.png" /> Unidades de saúde'
            });
var format_PontodeacessoprevenodoHIVPrEP_6 = new ol.format.GeoJSON();
var features_PontodeacessoprevenodoHIVPrEP_6 = format_PontodeacessoprevenodoHIVPrEP_6.readFeatures(json_PontodeacessoprevenodoHIVPrEP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontodeacessoprevenodoHIVPrEP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontodeacessoprevenodoHIVPrEP_6.addFeatures(features_PontodeacessoprevenodoHIVPrEP_6);
var lyr_PontodeacessoprevenodoHIVPrEP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontodeacessoprevenodoHIVPrEP_6, 
                style: style_PontodeacessoprevenodoHIVPrEP_6,
                popuplayertitle: 'Ponto de acesso à prevenção do HIV (PrEP)',
                interactive: true,
                title: '<img src="styles/legend/PontodeacessoprevenodoHIVPrEP_6.png" /> Ponto de acesso à prevenção do HIV (PrEP)'
            });
var format_PontodeacessoaotratamentodoHIVPEP_7 = new ol.format.GeoJSON();
var features_PontodeacessoaotratamentodoHIVPEP_7 = format_PontodeacessoaotratamentodoHIVPEP_7.readFeatures(json_PontodeacessoaotratamentodoHIVPEP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontodeacessoaotratamentodoHIVPEP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontodeacessoaotratamentodoHIVPEP_7.addFeatures(features_PontodeacessoaotratamentodoHIVPEP_7);
var lyr_PontodeacessoaotratamentodoHIVPEP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontodeacessoaotratamentodoHIVPEP_7, 
                style: style_PontodeacessoaotratamentodoHIVPEP_7,
                popuplayertitle: 'Ponto de acesso ao tratamento do HIV (PEP)',
                interactive: true,
                title: '<img src="styles/legend/PontodeacessoaotratamentodoHIVPEP_7.png" /> Ponto de acesso ao tratamento do HIV (PEP)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Proximidadeaosserviosdetratamento_1.setVisible(false);lyr_DensidadedasUBS_2.setVisible(false);lyr_Localidadesdomunicpio_3.setVisible(true);lyr_Rodoviasdomunicpio_4.setVisible(true);lyr_Unidadesdesade_5.setVisible(true);lyr_PontodeacessoprevenodoHIVPrEP_6.setVisible(true);lyr_PontodeacessoaotratamentodoHIVPEP_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Proximidadeaosserviosdetratamento_1,lyr_DensidadedasUBS_2,lyr_Localidadesdomunicpio_3,lyr_Rodoviasdomunicpio_4,lyr_Unidadesdesade_5,lyr_PontodeacessoprevenodoHIVPrEP_6,lyr_PontodeacessoaotratamentodoHIVPEP_7];
lyr_Localidadesdomunicpio_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'incidencia': 'incidencia', 'cura': 'cura', 'abandono': 'abandono', 'obito_tb': 'obito_tb', 'p_cura': 'p_cura', 'p_abandono': 'p_abandono', 'p_obito': 'p_obito', 'area_km': 'area_km', 'alagamento': 'alagamento', });
lyr_Rodoviasdomunicpio_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_objeto': 'id_objeto', 'codtrechorodov': 'codtrechorodov', 'tipotrechorod': 'tipotrechorod', 'jurisdicao': 'jurisdicao', 'administracao': 'administracao', 'concessionaria': 'concessionaria', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'capaccarga': 'capaccarga', 'id_produtor': 'id_produtor', 'id_elementoprodutor': 'id_elementoprodutor', 'geometriaaproximada': 'geometriaaproximada', 'canteirodivisorio': 'canteirodivisorio', });
lyr_Unidadesdesade_5.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_PontodeacessoprevenodoHIVPrEP_6.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_PontodeacessoaotratamentodoHIVPEP_7.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_Localidadesdomunicpio_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'incidencia': 'Range', 'cura': 'Range', 'abandono': 'Range', 'obito_tb': 'Range', 'p_cura': 'TextEdit', 'p_abandono': 'TextEdit', 'p_obito': 'TextEdit', 'area_km': 'TextEdit', 'alagamento': 'CheckBox', });
lyr_Rodoviasdomunicpio_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'id_objeto': 'TextEdit', 'codtrechorodov': 'TextEdit', 'tipotrechorod': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'concessionaria': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'nrpistas': 'Range', 'nrfaixas': 'Range', 'trafego': 'TextEdit', 'capaccarga': 'TextEdit', 'id_produtor': 'Range', 'id_elementoprodutor': 'Range', 'geometriaaproximada': 'TextEdit', 'canteirodivisorio': 'TextEdit', });
lyr_Unidadesdesade_5.set('fieldImages', {'fid': 'TextEdit', 'vlr_latitude': 'TextEdit', 'vlr_longitude': 'TextEdit', 'cod_munic': 'Range', 'cod_cnes': 'Range', 'nom_estab': 'TextEdit', 'dsc_endereco': 'TextEdit', 'dsc_bairro': 'TextEdit', 'dsc_cidade': 'TextEdit', 'dsc_telefone': 'TextEdit', 'dsc_estrut_fisic_ambiencia': 'TextEdit', 'dsc_adap_defic_fisic_idosos': 'TextEdit', 'dsc_equipamentos': 'TextEdit', 'dsc_medicamentos': 'TextEdit', 'possui_pep': 'CheckBox', 'possui_prep': 'CheckBox', });
lyr_PontodeacessoprevenodoHIVPrEP_6.set('fieldImages', {'fid': 'TextEdit', 'vlr_latitude': 'TextEdit', 'vlr_longitude': 'TextEdit', 'cod_munic': 'Range', 'cod_cnes': 'Range', 'nom_estab': 'TextEdit', 'dsc_endereco': 'TextEdit', 'dsc_bairro': 'TextEdit', 'dsc_cidade': 'TextEdit', 'dsc_telefone': 'TextEdit', 'dsc_estrut_fisic_ambiencia': 'TextEdit', 'dsc_adap_defic_fisic_idosos': 'TextEdit', 'dsc_equipamentos': 'TextEdit', 'dsc_medicamentos': 'TextEdit', 'possui_pep': 'CheckBox', 'possui_prep': 'CheckBox', });
lyr_PontodeacessoaotratamentodoHIVPEP_7.set('fieldImages', {'fid': 'TextEdit', 'vlr_latitude': 'TextEdit', 'vlr_longitude': 'TextEdit', 'cod_munic': 'Range', 'cod_cnes': 'Range', 'nom_estab': 'TextEdit', 'dsc_endereco': 'TextEdit', 'dsc_bairro': 'TextEdit', 'dsc_cidade': 'TextEdit', 'dsc_telefone': 'TextEdit', 'dsc_estrut_fisic_ambiencia': 'TextEdit', 'dsc_adap_defic_fisic_idosos': 'TextEdit', 'dsc_equipamentos': 'TextEdit', 'dsc_medicamentos': 'TextEdit', 'possui_pep': 'CheckBox', 'possui_prep': 'CheckBox', });
lyr_Localidadesdomunicpio_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'objectid': 'hidden field', 'tipo': 'hidden field', 'nome_zona': 'hidden field', 'zona': 'hidden field', 'localidade': 'header label - always visible', 'incidencia': 'hidden field', 'cura': 'hidden field', 'abandono': 'hidden field', 'obito_tb': 'hidden field', 'p_cura': 'hidden field', 'p_abandono': 'hidden field', 'p_obito': 'hidden field', 'area_km': 'hidden field', 'alagamento': 'hidden field', });
lyr_Rodoviasdomunicpio_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'id_objeto': 'hidden field', 'codtrechorodov': 'hidden field', 'tipotrechorod': 'hidden field', 'jurisdicao': 'hidden field', 'administracao': 'hidden field', 'concessionaria': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'capaccarga': 'hidden field', 'id_produtor': 'hidden field', 'id_elementoprodutor': 'hidden field', 'geometriaaproximada': 'hidden field', 'canteirodivisorio': 'hidden field', });
lyr_Unidadesdesade_5.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'hidden field', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'hidden field', 'possui_prep': 'hidden field', });
lyr_PontodeacessoprevenodoHIVPrEP_6.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'hidden field', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'hidden field', 'possui_prep': 'hidden field', });
lyr_PontodeacessoaotratamentodoHIVPEP_7.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'hidden field', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'hidden field', 'possui_prep': 'hidden field', });
lyr_PontodeacessoaotratamentodoHIVPEP_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});